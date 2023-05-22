
const express= require('express');
const Model= require('./../models/Model');

const router = express.Router();
const morgan= require('morgan');
const axios = require('axios');
const ejs = require('ejs');
const fs = require('fs');
const Sport= require('../models/Model');




    router.get('/soccer/:title', async (req, res) => {
        const sport = await Sport.find({ title: req.params.title });
        if (!sport) res.redirect('/');
        res.render('soccer', { sport: sport });
      });
      
      router.get('/basketball', function(req, res) {
        Sport.find({type: 'Basketball'}, function(err, Sport) {
          if (err) throw err;
          res.render('soccer', {Sport: Sport});
        });
        
    });
    router.get('/Baseball', function(req, res) {
      Sport.find({type: 'Baseball'}, function(err, Sport) {
        if (err) throw err;
        res.render('soccer', {Sport: Sport});
      });
    });
    router.get('/Tennis', function(req, res) {
      Sport.find({type: 'Tennis'}, function(err, Sport) {
        if (err) throw err;
        res.render('soccer', {Sport: Sport});
      });
    });
    router.get('/volleyball', function(req, res) {
      Sport.find({type: 'Volleyball'}, function(err, Sport) {
        if (err) throw err;
        res.render('soccer', {Sport: Sport});
      });
    });
    router.get('/Football', function(req, res) {
      Sport.find({type: 'Football'}, function(err, Sport) {
        if (err) throw err;
        res.render('soccer', {Sport: Sport});
      });
    });
    router.get('/Golf', function(req, res) {
      Sport.find({type: 'Golf'}, function(err, Sport) {
        if (err) throw err;
        res.render('soccer', {Sport: Sport});
      });
    });

module.exports= router


