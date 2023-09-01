/* eslint-disable no-undef */
const express = require('express');
const app = express();
const mercadopago = require('mercadopago');
const functions = require('firebase-functions');
const cors = require('cors');

// Configura las opciones de CORS
const corsOptions = {
	origin: '*', // Cambia esto por tu dominio
	methods: ['GET', 'POST'], // Métodos permitidos
	optionsSuccessStatus: 204,
};

// Habilita CORS
app.use(cors(corsOptions));

mercadopago.configure({
	access_token: "APP_USR-4157354041856173-081515-788a5e9fcbe5bb1fdd1d14488451a5c1-519941031",
});

app.get('/create-preference', (req, res) => {
	let preference = {
		items: [
			{
				id: 1,
				title: 'Plan 1',
				unit_price: 4300,
				quantity: 1
			},
			{
				id: 2,
				title: 'Plan 2',
				unit_price: 9500,
				quantity: 1
			},
			{
				id: 3,
				title: 'Plan 3',
				unit_price: 20000,
				quantity: 1
			}
		],
		back_urls: {
			success: 'https://buenospintores-23a2b.web.app/UserProfile/paymentSuccess',
			failure: 'https://buenospintores-23a2b.web.app/UserProfile/paymentFailure',
			pending: ''
		},
		auto_return: 'approved'
	}

	preference.items = preference.items.filter((itm) => itm.id === Number(req.query.plan));

	mercadopago.preferences.create(preference).then((response) => res.json({id: response.body.id, plan: req.query.plan})).catch((error) => console.log(error))
});

app.get('/notificaciones', async (req, res) => {

    const paymentId = req.query.id; // ID del pago en la notificación
    const paymentInfo = await mercadopago.payment.findById(paymentId);

	res.json({ paymentInfo })
  });
  

exports.app = functions.https.onRequest(app);