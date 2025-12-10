import { Router } from 'express';
import {
    listThemes,
    getTheme,
    createTheme,
    updateTheme,
    deleteTheme,
    selectTheme
} from '../controllers/themeController.js';
import validateThemePayload from '../middleware/themeValidator.js';

const router = Router();

router.get('/', listThemes);
router.get('/:id/select', selectTheme);
router.get('/:id', getTheme);
router.post('/', validateThemePayload, createTheme);
router.put('/:id', validateThemePayload, updateTheme);
router.delete('/:id', deleteTheme);

export default router;