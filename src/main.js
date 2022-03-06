require("dotenv").config({ path: "./config/env/.env" });
const express = require('express')
const cookieParser = require('cookie-parser');
const helmet = require("helmet");

const app = express();

// 보안설정
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.set('etag', false);
app.set('trust proxy', 1);
app.use(cookieParser());

app.set('view engine', 'ejs')
app.set('views', './views/pages');
app.use(express.static('public'));

const controller = require('./controller');
app.use('/', controller);

app.listen(4000);