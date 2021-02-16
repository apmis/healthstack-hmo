"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const node_fhir_server_core_1 = require("@asymmetrik/node-fhir-server-core");
const app_1 = __importDefault(require("../app"));
const search = (args, context) => __awaiter(void 0, void 0, void 0, function* () {
    console.log({ de: '=============' });
    const patientsService = app_1.default.service('patients');
    let BundleEntry = require(node_fhir_server_core_1.resolveSchema(args.base_version, 'bundleentry'));
    let Bundle = require(node_fhir_server_core_1.resolveSchema(args.base_version, 'bundle'));
    let Patient = require(node_fhir_server_core_1.resolveSchema(args.base_version, 'patient'));
    // You will need to build your query based on the sanitized args
    let query = {}; // myCustomQueryBuilder(args);
    let results = [];
    try {
        console.log({ results });
        results = (yield patientsService.find());
        console.log({ results });
        let patients = results['data'].map(result => new Patient(result));
        let entries = patients.map(patient => new BundleEntry({ resource: patient }));
        return new Bundle({ entry: entries });
    }
    catch (error) {
        console.log({ error });
    }
});
exports.search = search;
