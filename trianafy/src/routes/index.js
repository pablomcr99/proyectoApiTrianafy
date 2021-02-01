import { Router } from 'express';
import auth from './auth';
import lists from './lists';
import songs from './songs';

export default {
    auth,
    songs,
    lists
}