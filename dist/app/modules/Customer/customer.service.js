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
exports.CustomerService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createCustomer = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const notExistCustomer = yield prisma_1.default.customer.findUnique({
        where: {
            email: req.body.email,
        },
    });
    if (notExistCustomer)
        throw new Error("Customer already exits");
    const customerData = yield prisma_1.default.customer.create({
        data: req.body,
    });
    return customerData;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allCustomers = yield prisma_1.default.customer.findMany();
    return allCustomers;
});
const getSpecificCustomer = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const specificCustomer = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: req.params.customerId,
        },
    });
    return specificCustomer;
});
// update
const updateCustomer = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const updateResult = yield prisma_1.default.customer.update({
        where: {
            customerId: req.params.customerId,
        },
        data: req.body,
    });
    if (!updateResult)
        return null;
    return updateResult;
});
// delete
const deleteCustomer = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notExitsCustomer = yield prisma_1.default.customer.findUnique({
            where: {
                customerId: req.params.customerId,
            },
        });
        if (!notExitsCustomer)
            return null;
        const deletedResult = yield prisma_1.default.customer.delete({
            where: {
                customerId: req.params.customerId,
            },
        });
        return deletedResult;
    }
    catch (err) {
        throw new Error("An error occurred while trying to delete the customer");
    }
});
exports.CustomerService = {
    createCustomer,
    getAllCustomers,
    getSpecificCustomer,
    updateCustomer,
    deleteCustomer,
};
