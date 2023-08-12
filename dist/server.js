"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const dbConnection_1 = __importDefault(require("./connections/dbConnection"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const anketa_routes_1 = __importDefault(require("./routes/anketa.routes"));
const fillial_routes_1 = __importDefault(require("./routes/fillial.routes"));
const lavozim_routes_1 = __importDefault(require("./routes/lavozim.routes"));
const app = (0, express_1.default)();
(0, dbConnection_1.default)();
app.use(express_1.default.json({ limit: "30mb" }));
app.use((0, cookie_parser_1.default)());
app.use("/anketa", anketa_routes_1.default);
app.use("/filial", fillial_routes_1.default);
app.use("/lavozim", lavozim_routes_1.default);
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
