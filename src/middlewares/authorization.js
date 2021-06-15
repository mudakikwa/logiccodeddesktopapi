import jwt from 'jsonwebtoken';
import config from '../config';

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, `${config.SECRET_KEY}`);
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
};
