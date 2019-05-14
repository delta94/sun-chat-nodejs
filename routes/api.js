'use strict';

const express = require('express');
const router = express.Router();

// Require controller
const auth = require('../app/controllers/auth/authController');
//User
const users = require('../app/controllers/users');
const usersValidate = require('../app/validations/users.js');

// Change language
router.get('/language/:lang', (req, res) => {
  let { lang } = req.params;
  res.cookie('lang', lang, { maxAge: 900000, httpOnly: true });
  res.status(200).json({ msg: __('changed_lang', {lang: lang}) });;
});

// Users
router.post('/login', usersValidate.validate('login'), users.apiLogin);
router.post('/signup', usersValidate.validate('register'), users.apiSignup);
router.get('/confirm/:userId/:active_token', users.confirmEmail);
router.param('userId', users.load);

module.exports = router;