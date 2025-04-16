import express from "express";
// import { BookRoutes } from "../modules/Book/book.routes";
// import { MemberRoutes } from "../modules/Member/member.route";
// import { BorrowRoutes } from "../modules/BorrowBook/borrow.route";
// import { ReturnRoutes } from "../modules/ReturnBook/return.route";

const router = express.Router();

const bikeServiceRoutes = [
  //   {
  //     path: "/books",
  //     route: BookRoutes,
  //   },
  //   {
  //     path: "/members",
  //     route: MemberRoutes,
  //   },
  //   {
  //     path: "/borrow",
  //     route: BorrowRoutes,
  //   },
  //   {
  //     path: "/return",
  //     route: ReturnRoutes,
  //   },
];

// bikeServiceRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
