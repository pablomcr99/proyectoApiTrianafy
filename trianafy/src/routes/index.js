import { Router } from 'express';

const router = Router();

router.get('/', /* método controlador */)
router.get('/me', /* método controlador */);
router.get('/:id', /* método controlador */);

// Resto de métodos del router

export default router;