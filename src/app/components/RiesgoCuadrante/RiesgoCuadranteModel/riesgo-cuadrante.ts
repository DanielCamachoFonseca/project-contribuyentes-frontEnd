import { Riesgo } from "../../Riesgo/RiesgoModel/riesgo";

export class RiesgoCuadrante {
  id_matriz_riesgo_cuadrante: number;
  id_matriz_riesgo: Riesgo;
  numero_cuadrante: number;
  valor_eje_x_desde: number;
  valor_eje_x_hasta: number;
  valor_eje_y_desde: number;
  valor_eje_y_hasta: number;
  color: string;
  estado: string;
  usuario_auditoria: string;
  fecha_auditoria: string;
}
