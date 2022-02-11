import { Variable } from "../../variable/VariableModel/variable";
import { Riesgo } from "../../Riesgo/RiesgoModel/riesgo";
import { Segmento } from "../../segmento/SegmentoModel/segmento";

export class RiesgoVariable {
  id_matriz_riesgo_variable: number;
  id_matriz_riesgo: Riesgo;
  id_variable: Variable;
  id_segmento: Segmento;
  fuente_peso_y: number;
  fuente_eje_x: string;
  fuente_eje_y: string;
  fuente_peso_contribuyente: string;
  estado: string;
  usuario_auditoria: string;
  fecha_auditoria: string;


}
