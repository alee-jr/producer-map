import React from "react";
import { Point } from "..";
import * as S from "./styles";

interface ListPointsProps {
  points: Point[];
  handleClick: (id: string) => void;
}

const ListPoints: React.FC<ListPointsProps> = ({ points, handleClick }) => {
  return (
    <S.Container>
      <S.HeaderTitle>
        <span>Listagem de pontos</span>
      </S.HeaderTitle>
      <S.Content>
        {points && points.length > 0 ? (
          points
            .sort(
              (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
            )
            .map((item, index) => (
              <>
                <S.Item key={index} onClick={() => handleClick(item.id)}>
                  <div>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.0148926 13.6328C0.470622 13.8606 0.899007 14.0019 1.30005 14.0566C1.71021 14.1113 2.0839 14.0794 2.42114 13.9609C2.7675 13.8424 3.08195 13.6966 3.3645 13.5234C3.64705 13.3593 3.89771 13.1634 4.11646 12.9355C4.34432 12.6985 4.54028 12.4661 4.70435 12.2382C4.87752 12.0104 5.02336 11.787 5.14185 11.5683C5.25122 11.3313 5.33325 11.1581 5.38794 11.0488C5.44263 10.9303 5.46997 10.871 5.46997 10.871C5.97127 10.9895 6.41333 11.0305 6.79614 10.9941C7.18807 10.9485 7.52531 10.8209 7.80786 10.6113C8.0813 10.4107 8.31828 10.1874 8.5188 9.94135C8.71932 9.68614 8.88794 9.4127 9.02466 9.12103C9.15226 8.82025 9.25708 8.53314 9.33911 8.2597C9.42114 7.97715 9.48039 7.70372 9.51685 7.43939C9.54419 7.17507 9.56242 6.97455 9.57153 6.83783C9.58065 6.70111 9.58521 6.63275 9.58521 6.63275C10.1594 6.74213 10.6653 6.74213 11.1028 6.63275C11.5494 6.52338 11.9231 6.30918 12.2239 5.99017C12.5247 5.66205 12.7844 5.30658 13.0032 4.92377C13.2219 4.54095 13.3951 4.1308 13.5227 3.6933C13.6594 3.2558 13.7642 2.83197 13.8372 2.42181C13.9192 2.01166 13.9648 1.61517 13.9739 1.23236C13.9921 0.849548 14.0012 0.562439 14.0012 0.371033C14.0103 0.179626 14.0149 0.0839233 14.0149 0.0839233C14.0149 0.0839233 13.9967 0.10671 13.9602 0.152283C13.9237 0.188741 13.8691 0.247986 13.7961 0.330017C13.7323 0.402934 13.6549 0.457621 13.5637 0.49408C13.4726 0.521423 13.3723 0.521423 13.2629 0.49408C12.8072 0.293559 12.3879 0.193298 12.0051 0.193298C11.6314 0.184184 11.2896 0.27533 10.9797 0.466736C10.679 0.658142 10.4055 0.876892 10.1594 1.12299C9.92244 1.36908 9.71737 1.64707 9.54419 1.95697C9.3619 2.26687 9.20695 2.5722 9.07935 2.87299C8.96086 3.17377 8.8606 3.46999 8.77856 3.76166C8.71476 4.04421 8.66463 4.2584 8.62817 4.40424C8.59172 4.55007 8.57349 4.62299 8.57349 4.62299C8.2089 4.55918 7.86711 4.56374 7.5481 4.63666C7.2382 4.70957 6.94653 4.85085 6.6731 5.06049C6.40877 5.26101 6.16724 5.47976 5.94849 5.71674C5.72974 5.95372 5.52922 6.20892 5.34692 6.48236C5.17375 6.74668 5.0188 7.00189 4.88208 7.24799C4.75448 7.49408 4.64966 7.73106 4.56763 7.95892C4.4856 8.1959 4.42179 8.37364 4.37622 8.49213C4.33976 8.6015 4.32153 8.65619 4.32153 8.65619C3.92961 8.49213 3.56958 8.41465 3.24146 8.42377C2.92244 8.43288 2.63534 8.52403 2.38013 8.6972C2.13403 8.87038 1.91073 9.07546 1.71021 9.31244C1.50968 9.5403 1.33651 9.80007 1.19067 10.0917C1.04484 10.3834 0.921794 10.6751 0.821533 10.9667C0.730387 11.2584 0.662028 11.5501 0.616455 11.8417C0.561768 12.1425 0.525309 12.3886 0.50708 12.58C0.497965 12.7623 0.50708 12.8899 0.534424 12.9628C0.579997 13.1087 0.584554 13.2272 0.548096 13.3183C0.511637 13.4094 0.438721 13.4732 0.329346 13.5097C0.229085 13.5553 0.151611 13.5872 0.0969238 13.6054C0.0422363 13.6236 0.0148926 13.6328 0.0148926 13.6328ZM10.9797 2.08002C11.1985 1.90684 11.4081 1.77924 11.6086 1.6972C11.8092 1.61517 12.0051 1.58327 12.1965 1.6015C12.3971 1.61062 12.5566 1.6653 12.675 1.76556C12.8027 1.85671 12.8938 1.99343 12.9485 2.17572C12.9941 2.35801 13.0032 2.55853 12.9758 2.77728C12.9485 2.98692 12.8756 3.21934 12.7571 3.47455C12.6477 3.72064 12.511 3.95306 12.3469 4.17181C12.1829 4.38145 11.9915 4.57286 11.7727 4.74603C11.5631 4.9101 11.3534 5.03314 11.1438 5.11517C10.9342 5.1972 10.7336 5.23366 10.5422 5.22455C10.3508 5.20632 10.1913 5.15163 10.0637 5.06049C9.94523 4.96023 9.85864 4.81895 9.80396 4.63666C9.74927 4.44525 9.7356 4.24473 9.76294 4.0351C9.7994 3.81635 9.87231 3.58392 9.98169 3.33783C10.1002 3.08262 10.2415 2.8502 10.4055 2.64056C10.5696 2.43093 10.761 2.24408 10.9797 2.08002ZM6.64575 6.44135C6.87362 6.29551 7.09237 6.19525 7.302 6.14056C7.51164 6.07676 7.7076 6.06309 7.88989 6.09955C8.09041 6.12689 8.24992 6.19525 8.36841 6.30463C8.4869 6.414 8.56893 6.55983 8.6145 6.74213C8.66007 6.94265 8.66007 7.15228 8.6145 7.37103C8.57804 7.58067 8.49601 7.79942 8.36841 8.02728C8.24992 8.26426 8.10409 8.47845 7.93091 8.66986C7.75773 8.86127 7.56177 9.02989 7.34302 9.17572C7.11515 9.32155 6.8964 9.42637 6.68677 9.49017C6.47713 9.54486 6.28117 9.55853 6.09888 9.53119C5.90747 9.49473 5.75252 9.42181 5.63403 9.31244C5.51554 9.20306 5.42896 9.05267 5.37427 8.86127C5.33781 8.67898 5.33781 8.48301 5.37427 8.27338C5.41073 8.05463 5.49276 7.82676 5.62036 7.58978C5.73885 7.3528 5.88468 7.13861 6.05786 6.9472C6.23104 6.7558 6.427 6.58718 6.64575 6.44135ZM2.59888 9.90033C2.82674 9.7545 3.04093 9.65424 3.24146 9.59955C3.45109 9.53575 3.65161 9.52207 3.84302 9.55853C4.03442 9.58588 4.18937 9.65424 4.30786 9.76361C4.42635 9.87299 4.50838 10.0188 4.55396 10.2011C4.59953 10.3925 4.59953 10.5976 4.55396 10.8163C4.5175 11.026 4.44002 11.2493 4.32153 11.4863C4.19393 11.7232 4.04354 11.9374 3.87036 12.1288C3.69718 12.3203 3.50122 12.4889 3.28247 12.6347C3.06372 12.7805 2.84953 12.8854 2.63989 12.9492C2.43026 13.0038 2.22974 13.0175 2.03833 12.9902C1.84692 12.9537 1.69198 12.8808 1.57349 12.7714C1.455 12.662 1.37297 12.5117 1.32739 12.3203C1.28182 12.138 1.27726 11.942 1.31372 11.7324C1.35018 11.5136 1.42765 11.2857 1.54614 11.0488C1.67375 10.8118 1.82414 10.5976 1.99731 10.4062C2.17961 10.2148 2.38013 10.0462 2.59888 9.90033Z"
                        fill="#739E08"
                      />
                    </svg>
                    <span>
                      Ponto nº {(index + 1).toString().padStart(3, "0")}
                    </span>
                  </div>
                  <span className="createdAt">
                    Criado em: {new Date(item.createdAt).toLocaleString()}
                  </span>
                </S.Item>
              </>
            ))
        ) : (
          <S.Item>
            <span className="defaultMessage">
              Sem pontos de monitoramento para exibir no momento.
            </span>
          </S.Item>
        )}
      </S.Content>
    </S.Container>
  );
};

export default ListPoints;
