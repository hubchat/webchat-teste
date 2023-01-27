import { connect } from 'mongoose';

connect(String(process.env.MONGO_URL));
