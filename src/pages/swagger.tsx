import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { API_ROOT, SWAGGER_JSON } from "../constants/common";

const Swagger = () => <SwaggerUI url={`${API_ROOT}/${SWAGGER_JSON}`} />;

export default Swagger;
