import { Router } from "express";
import marketingController from "../controllers/marketing.controller";
import marketingRoleChecker from "../middlewares/marketing.middleware";

const marketingRouter: Router = Router()

marketingRouter.get('/hubspot', marketingRoleChecker.hubSpot ,marketingController.hubSpot);
marketingRouter.get('/google-analytics', marketingRoleChecker.googleAnalytics, marketingController.googleAnalytics)
marketingRouter.get('/google-ads', marketingRoleChecker.googleAds, marketingController.googleAds)
marketingRouter.get('/facebook-ads', marketingRoleChecker.facebookAds, marketingController.facebookAds)

export default marketingRouter;