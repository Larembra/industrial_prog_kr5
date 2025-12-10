import { Router } from 'express';
import themeRoutes from './themeRoutes.js';

const router = Router();

router.use('/themes', themeRoutes);

export default router;