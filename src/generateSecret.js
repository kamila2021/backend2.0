import { randomBytes } from 'crypto';

const secret = randomBytes(32).toString('hex');
console.log('Nuevo secreto generado:', secret);
