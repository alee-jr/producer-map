import MapComponent from "@/components/Map";
import MarkerComponent from "@/components/Marker";
import PolygonComponent from "@/components/Polygon";
import { v4 as uuidv4 } from "uuid";
import { useCallback, useState } from "react";
import geojson from "../../../data/geo.json";
import Button from "../../Button";
import close from "../../../../public/assets/icons/close-grey.svg";
import { WrapperButtons } from "./styles";
import trash from "../../../../public/assets/icons/Trash.svg";
import pin from "../../../../public/assets/icons/Pin.svg";
import Image from "next/image";
import Modal from "@/components/Modal";
import { useModal } from "@/components/Modal/modalContext";
import ListPoints from "./ListPoints";

export interface Point {
  id: string;
  lat: number;
  lng: number;
  createdAt: string;
}

export default function MapPage() {
  const { modalStates, updateModalState } = useModal();
  const [isAddingPoint, setIsAddingPoint] = useState(false);
  const [selectPinId, setSelectPinId] = useState<string>("");
  const [points, setPoints] = useState<Point[]>([]);

  const center: google.maps.LatLngLiteral = {
    lat: -15.183,
    lng: -53.583,
  };

  const onMarkerDragEnd = useCallback(
    (id: string, event: google.maps.MapMouseEvent) => {
      const newPoints = [...points];
      newPoints[points.findIndex(item => item.id === id)] = {
        id: uuidv4(),
        lat: event.latLng!.lat(),
        lng: event.latLng!.lng(),
        createdAt: new Date().toISOString(),
      };
      setPoints(newPoints);
    },
    [points]
  );

  const onMapClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      if (isAddingPoint) {
        const newPoint: Point = {
          id: uuidv4(),
          lat: event.latLng!.lat(),
          lng: event.latLng!.lng(),
          createdAt: new Date().toISOString(),
        };
        setPoints([...points, newPoint]);
        setIsAddingPoint(false);
      }
    },
    [isAddingPoint, points]
  );

  const polygonCoords = geojson.features[0].geometry.coordinates[0].map(
    (coords: number[]) => ({ lat: coords[1], lng: coords[0] })
  );

  const toggleIsAddingPoint = useCallback(() => {
    setIsAddingPoint((prev) => !prev);
  }, []);

  const onDeletePoint = useCallback(() => {
    if (selectPinId) {
      const newPoints = [...points];
      newPoints.splice(
        points.findIndex((item) => item.id === selectPinId),
        1
      );
      setPoints(newPoints);
      setSelectPinId("");
      handleModalState("delete_pin", false);
    }
  }, [selectPinId]);

  const onDeleteAllPoints = useCallback(() => {
    setPoints([]);
    handleModalState("delete_all", false);
  }, []);

  function handleModalState(modalId: string, isOpen: boolean) {
    updateModalState(modalId, isOpen);
  }

  const buttonText = isAddingPoint ? (
    <>
      {"CANCELAR"}
      <Image src={close} alt="" />
    </>
  ) : (
    <>
      {"ADICIONAR NOVO"}
      <Image alt="" src={pin} />
    </>
  );

  return (
    <>
      <Modal
        isOpen={modalStates.delete_all}
        handleExclude={onDeleteAllPoints}
        onClose={() => handleModalState("delete_all", false)}
        title="Excluir todos os pontos?"
      />
      <Modal
        isOpen={modalStates.delete_pin}
        handleExclude={onDeletePoint}
        onClose={() => handleModalState("delete_pin", false)}
        title="Excluir ponto selecionado?"
      />
      <MapComponent center={center} onMapClick={onMapClick}>
        <ListPoints
          points={points}
          handleClick={(id: string) => setSelectPinId(id)}
        />
        <PolygonComponent polygonCoords={polygonCoords} />
        {points.map((point, index) => (
          <MarkerComponent
            key={`${point.lat}-${point.lng}`}
            position={point}
            draggable
            onDragEnd={(_idx, event) => onMarkerDragEnd(point.id, event)}
            index={index}
          />
        ))}
        <WrapperButtons>
          {selectPinId && (
            <Button
              variant="danger"
              onClick={() => handleModalState("delete_pin", true)}
            >
              DELETAR PIN
              <Image alt="" src={trash} />
            </Button>
          )}
          <Button variant="primary" onClick={toggleIsAddingPoint}>
            {buttonText}
          </Button>
          {points.length > 0 && (
            <Button
              variant="danger"
              onClick={() => handleModalState("delete_all", true)}
            >
              DELETAR TODOS
              <Image alt="" src={trash} />
            </Button>
          )}
        </WrapperButtons>
      </MapComponent>
    </>
  );
}
