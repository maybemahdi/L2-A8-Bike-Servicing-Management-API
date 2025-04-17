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
exports.ServicingService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createNewService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newService = yield prisma_1.default.serviceRecord.create({
        data: req.body,
    });
    return newService;
});
const getAllServiceData = () => __awaiter(void 0, void 0, void 0, function* () {
    const allServiceData = yield prisma_1.default.serviceRecord.findMany();
    return allServiceData;
});
const getSpecificService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const specificService = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: req.params.serviceId,
        },
    });
    return specificService;
});
const markServiceAsCompleted = (serviceId, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedService = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId,
        },
        data: {
            completionDate: completionDate ? new Date(completionDate) : new Date(),
            status: "done",
        },
    });
    return updatedService;
});
const getOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("called in service");
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const services = yield prisma_1.default.serviceRecord.findMany({
        where: {
            AND: [
                {
                    OR: [{ status: "pending" }, { status: "in-progress" }],
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
    });
    //   console.log("Fetched services:", services);
    return services;
});
exports.ServicingService = {
    createNewService,
    getAllServiceData,
    getSpecificService,
    markServiceAsCompleted,
    getOverdueServices,
};
