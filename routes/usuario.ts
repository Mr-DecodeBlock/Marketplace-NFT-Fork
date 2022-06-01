import { Router } from 'express';
import {  
    getUsuarios, 
    postUsuario, 
    deleteUsuario, 
    login,
    validateUser,
    resetPassword } from '../controllers/usuarios';

const router = Router();

router.get('/',        getUsuarios );
router.post('/',       postUsuario );
router.delete('/:id',  deleteUsuario );

router.post('/validate', validateUser);
router.post('/login', login );
router.post('/reset', resetPassword);

export default router;