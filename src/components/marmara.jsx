import "../components/style/same.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import akdenizJson from "./assets/marmara.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import map from "./assets/map.png"

function Marmara() {
  const[ilName,setIlName] = useState("");
  const[places,setPlace] = useState([]);
  const list = [];

  function getJSONData(name) {
    for(let i = 0;i<akdenizJson.length;i++){
      if((name).toString().toLowerCase() == (akdenizJson[i].name).toLowerCase()){
        console.log(akdenizJson[i].places[0].name);
        for(let j = 0;j<akdenizJson[i].places.length;j++){
          list.push(akdenizJson[i].places[j]);
        }
      }
    }
  }

  const setIlNameOnClick = (event) => {
    if (event.target.tagName === 'path') {
      const selectedIlName = event.target.parentNode.getAttribute('data-iladi');
      setIlName(selectedIlName);
      handleShow();
      getJSONData(selectedIlName);
      setPlace(list)
      console.log(places);
    }
  };
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div class="svg-turkiye-haritasi">
    <h2 className="title">Marmara Bölgesi</h2>
        <svg version="1.1" id="svg-turkiye-haritasi" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1007.478 527.323" xmlSpace="preserve">
        <g id="istanbul">
    <g id="istanbul-asya" onClick={setIlNameOnClick} data-plakakodu="34" data-alankodu="216" data-iladi="İstanbul">
      <path
        d="M187.613,66.733l-2.876,1.342l-2.063,2.218l0.561,1.719l0.062,0.188l-0.125,0.188l-2.002,3.78 l-0.031,0.062l-0.062,0.062l-1.657,1.78l-0.564,3l1.593,1.595l0.031,0.031l2.093,2.47l0.031,0.031l2.249,2.282l0.062,0.031 l3.499,1.877l0.156,0.094l0.062,0.156l1.03,2.439l3.593,1.533l1.376-2.53l0.031-0.094l1.221-3.937l0.657-2.156l0.031-0.188 l0.188-0.094l3.657-2.154h0.031l2.626-1.405l0.188-0.062l0.188,0.031l1.625,0.376l0.094,0.031l0.062,0.031l3.593,2.158 l2.219-0.53l3.032-1.529h0.031l2.595-1.249h0.031l3.689-2.123l0.627-2.875c-0.638-0.155-3.737-0.913-4.593-1.159 c-0.842-0.24-4.405-1.127-4.405-1.127l-7.437-1.629l-0.031-0.031h-0.031l-5.561-1.878v-0.031h-0.031l-5.624-2.347L187.613,66.733 z" />
      <path
        d="M179.76,85.166l-0.062,0.688l-0.094,0.75l1.688,0.751l0.062,0.031l0.062,0.031l2.155,1.907l0.188,0.156 l-0.031,0.25l-0.252,2.906l-0.031,0.562l-0.562-0.094l-2-0.376l-0.156-0.031l-0.095-0.092l-1.374-1.282l-0.062-0.031 l-0.031-0.031l-1.374-1.907l-0.031-0.062l-0.031-0.062l-1.029-2.907l-0.188-0.531l0.594-0.125l2-0.374L179.76,85.166z" />
    </g>
    <g id="istanbul-avrupa" onClick={setIlNameOnClick} data-plakakodu="34" data-alankodu="212" data-iladi="İstanbul">
      <path
        d="M136.272,39.497l-0.25,0.25l0.031,0.344l-0.344,0.031l-1.658,3.155l1.873,3.532l0.125,0.219l-0.125,0.25 l-2.408,4.53v0.031l-3.284,5.904v0.031l-4.098,6.686v0.031l-1.253,5.249l1.092,3.563l4.689-1.372h0.031h0.031l6.594-0.902h0.125 l0.125,0.031l2.874,1.158v-0.031c0,0,1.118,0.405,2.312,0.782c0.597,0.189,1.23,0.361,1.719,0.501 c0.245,0.07,0.433,0.118,0.594,0.156c0.161,0.039,0.312,0.062,0.25,0.062c0.178,0,0.291,0.05,0.438,0.094s0.321,0.088,0.5,0.156 c0.358,0.136,0.757,0.324,1.156,0.501c0.798,0.351,1.531,0.689,1.531,0.689l0.062,0.031l0.031,0.031l3.499,2.596v-0.062v-0.469 l0.469-0.031l2.656-0.124h0.406l0.094,0.406c0,0,0.122,0.564,0.249,1.219c0.105,0.539,0.182,1.038,0.218,1.469 c0.028,0.008,0.025,0.023,0.062,0.031c0.213,0.045,0.573,0.093,1,0.126c0.854,0.063,1.994,0.087,3.156,0.096 c2.325,0.017,4.656-0.059,4.656-0.059h0.219l0.125,0.125l0.781,0.656l1.312-0.718l0.094-0.031l0.094-0.031l3.188-0.248 l2.157-1.124l-0.594-0.344l-0.312-0.156l0.031-0.312l0.251-2.281l0.062-0.438h0.438l1.656,0.001h0.281l0.125,0.219l0.874,1.344 l1.782-1.249l0.626-2.719v-0.094l0.062-0.094l0.5-0.688l-0.687-2.281l-0.125-0.344l0.344-0.219l1.219-0.749l0.031-0.031 l1.439-2.03l0.062-0.094l0.532-1.219l-3.906-0.002h-0.094l-0.062-0.031l-4.311-1.502l-0.031-0.031h-0.031l-4.53-2.283 l-4.687-2.409l-5.436-2.784h-0.031l-5.529-3.534l-5.81-3.409l-0.031-0.031l-3.405-2.408h-0.031l-4.529-3.408l-0.031-0.031 l-0.031-0.031l-2.779-2.783L136.71,40.5l-0.031-0.062L136.272,39.497z" />
    </g>
    </g>
    <g id="edirne" onClick={setIlNameOnClick} data-plakakodu="22" data-alankodu="284" data-iladi="Edirne">
    <path
      d="M70.647,5.013l-0.781,0.75L69.71,5.919h-0.219l-4.406-0.127h-0.062L64.961,5.76 l-1.876-0.532l-2.72,2.593l-1.096,4.28l-0.031,0.125l-0.094,0.094l-1.876,2.124l-0.094,0.125L57.017,14.6l-2.125,0.624l-0.25,0.094 l-0.188-0.156l-1.655-1.157l-4.031-0.002l-0.5,1.53v0.031l-0.031,0.062L46.86,18.28l1.968,2.689l2.719,0.501h0.125l0.094,0.094 l2.155,1.782l0.062,0.031l0.062,0.094l1.873,3.313l3.468,0.753l0.531,0.094l-0.156,0.531l-0.626,2.25l-0.724,8.406l0.999,1.251 l0.094,0.125v0.188l0.278,5.906v0.344l-0.281,0.125l-2.407,1.28l-0.156,0.094l-0.219-0.062L53.5,47.161l-0.907,1.125l-0.062,0.062 l-0.062,0.031l-3.908,2.529l-0.094,0.062h-0.125l-4.938,0.747l-2.002,3.593l0.749,1.5l0.062,0.156v0.125l-0.251,2.656l-0.377,3.688 l1.717,3.751l0.062,0.156l-0.031,0.156l-0.752,4.156l-0.062,0.25l-0.218,0.126l-3.439,1.592l-1.157,1.874l-0.062,0.094 l-0.062,0.062l-5.096,3.591l-2.972,4.967l-0.094,0.094l-0.094,0.062l-3.907,2.123l0.247,5.281l1.811,1.251l5.781,0.128h0.031 l0.062,0.031l3.156,0.846l2.626-0.968l0.188-0.062l0.156,0.094l2.593,1.032l1.907-1.03l0.25-0.125l0.219,0.125l2.594,1.438 l2.97-0.967h0.062h0.062l2.907-0.154l5.189-1.372l0.25-0.312l2.408-3.093l-0.967-3.563l-1.905-1.751l-0.156-0.156v-0.25 l0.253-5.938v-0.031l0.031-0.062l0.752-2.781l0.846-3.5l-0.624-1.625l-0.031-0.031l-1.249-1.751l-0.219-0.312l0.25-0.281l0.5-0.625 l0.094-0.156l0.156-0.031l7.001-1.84l4.877-3.309l1.752-3.78l-0.467-4.031l-1.123-3.313v-0.031l-0.031-0.062l-0.497-4.688v-0.031 v-0.062l0.377-3.781l0.031-0.156l0.094-0.125l3.627-4.498l0.031-0.031l1.971-3.061l0.031-0.062l0.689-2.531l-3.311-1.002 l-0.438-0.125l0.062-0.438l0.407-2.531v-0.156l0.156-0.125l3.19-2.936v-0.038l1.563-2.218l-0.245-9.312l-0.339-6.469h-0.031 L74.93,5.047l-1.595,1.061l-0.251,0.126l-0.25-0.125L70.647,5.013z" />
    </g>
    <g id="kirklareli" onClick={setIlNameOnClick} data-plakakodu="39" data-alankodu="288" data-iladi="Kırklareli">
    <path
      d="M94.432-0.224l-4.595,1.216l-0.094,0.031l-0.125-0.031l-4.249-0.971l-2.47,1.718 l-2.407,2.53l-0.094,0.094l-0.125,0.031l-1.281,0.374l0.371,6.688v0.031l0.245,9.469v0.156l-0.094,0.125l-1.626,2.405l-0.031,0.031 l-0.062,0.062l-3.158,2.904l-0.283,1.907l3.374,1.033l0.469,0.125l-0.125,0.469l-0.877,3.156l-0.031,0.094l-0.031,0.062L75.1,36.64 l-0.032,0.032l-3.564,4.436l-0.377,3.531v0.031v0.062l0.498,4.469v0.062h0.031l4.47-1.873l0.188-0.094l0.188,0.094l4.935,2.16 h0.031h0.031l1.655,0.97l6.907,0.004h0.25l0.125,0.156l5.341,5.972l1.875,0.876l1.688-0.78l0.062-0.031h0.094l5.312-0.466 l0.691-4.906v-0.094l0.062-0.094l2.628-4.78l0.094-0.156l0.125-0.062l6.564-3.402l0.062-0.031l0.094-0.031l7.313-1.215l0.031-0.031 l4.001-1.842l0.094-0.062h0.125l4.125-0.123h0.031l4.438-0.436l0.625-0.625l-0.031-0.031l-1.998-2.782l-0.094-0.125v-0.125 l-0.248-4l-1.811-2.722l-0.031-0.031l-0.031-0.031l-1.623-3.782l-0.031-0.031V24.67l-1.123-3.657l-0.031-0.094v-0.095l0.252-4.406 l0.031-0.344l0.312-0.094l2.845-1.092l0.657-1.344l-1.468-2.282l-2.125-0.001h-0.062l-0.031-0.031l-4.311-0.971l-3.562,0.842 l-0.125,0.031l-0.125-0.031l-3.937-1.096l-4.438,0.686l-3.47,2.123l-0.312,0.188l-0.281-0.25l-2.218-1.939l-4.061-1.502 l-0.156-0.062l-0.094-0.125l-1.998-2.907l-0.031-0.031l-0.031-0.062l-1.123-3.063c-0.051-0.058-0.401-0.464-0.874-0.938 c-0.253-0.253-0.518-0.53-0.75-0.719s-0.456-0.291-0.406-0.281c-0.268-0.054-0.53-0.168-0.812-0.312s-0.562-0.331-0.844-0.5 C94.844,0.03,94.564-0.137,94.432-0.224z" />
    </g>
    <g id="tekirdag" onClick={setIlNameOnClick} data-plakakodu="59" data-alankodu="282" data-iladi="Tekirdağ">
    <path
      d="M134.566,40.079l-3.656,0.342h-0.031l-4.031,0.123l-3.97,1.842l-0.062,0.031l-0.062,0.031 l-7.407,1.246h-0.062l-6.283,3.278l-2.565,4.687l-0.722,5.125l-0.062,0.375l-0.375,0.031l-5.656,0.528h-0.031l-1.719,0.811 l-0.219,0.125l-0.219-0.125l-2.155-1.001l-0.094-0.031l-0.062-0.094l-5.247-5.878l-6.875-0.004h-0.125l-0.125-0.062l-1.718-1.001 l-0.031-0.031l-4.687-2.034l-4.345,1.81l0.78,2.406v0.062l0.031,0.031l0.498,4.188v0.125l-0.062,0.125l-1.879,4.06l-0.062,0.125 l-0.125,0.062l-5.033,3.403l-0.094,0.062h-0.062l-6.911,1.874l-0.156,0.219l1.03,1.439l0.031,0.062l0.031,0.031l0.749,1.906 l0.063,0.156l-0.062,0.156L59.86,74.35l-0.752,2.781l-0.253,5.594l1.874,1.751l0.094,0.094l0.031,0.125l0.936,3.439l8.312,0.005 h0.312l0.156,0.281l1.249,2.657l0.094,0.219l-0.125,0.219l-2.002,3.687l-0.031,0.031l-0.031,0.031l-1.595,1.968l0.56,2.781v0.062 v0.031v0.406l1.719,0.001l3.658-2.936l0.125-0.094h0.156l5.188-0.372l3.907-2.31l0.031-0.031l4.252-3.123l1.657-2.405l0.031-0.031 l0.031-0.031l4.314-4.186l0.031-0.031l0.062-0.031l2.22-1.28l1.065-4.843l0.031-0.031v-0.031l1.658-4.187l0.094-0.281l0.344-0.031 l6.844-0.121l2.219-0.843l0.062-0.031h0.094l3.406-0.123h0.062h0.062l3.531,0.783h0.094l0.094,0.062l4.248,3.158l3.344-0.56 l1.752-3.093l-1.154-3.751l-0.031-0.125l0.031-0.125l1.253-5.437l0.031-0.062l0.031-0.062l4.16-6.81l3.284-5.936l2.283-4.28 l-1.9-3.564l-0.125-0.25l0.125-0.219L134.566,40.079z" />
    </g>
    <g id="canakkale" onClick={setIlNameOnClick} data-plakakodu="17" data-alankodu="286" data-iladi="Çanakkale">
    <path
      d="M90.617,119.149l4.655,1.815l-1.44,2.937l-3.939,2.592l-0.062,0.031l-0.031,0.031l-2.783,2.779 l-0.186,0.191l0.062,0.281l0.748,3.282l0.031,0.094l0.062,0.094l2.093,2.563l1.091,4.562l0.123,3.813v0.031l0.124,1.75v0.094 l0.031,0.062l0.718,2l-0.846,3.062l-1.189,3.155l-2.877,2.279l-0.064,0.031l-4.032,2.06l-0.062,0.031l-3.219,1.092h-0.031 l-2.813,0.218l-2.374-1.752v-0.031l-2.405-1.751l-0.033-0.032l-0.062-0.031l-3.499-1.502h-0.031l-1.999-1.001l-0.062-0.031 l-0.062-0.031l-1.75-0.376h-0.093h-0.094l-2.25,0.249h-0.156l-0.094,0.094l-2.439,1.842h-0.031l-0.062,0.062l-1.595,0.655 l-3.406-0.002h-0.031h-0.031l-4.938,0.623l-0.25,0.031l-0.125,0.218l-0.876,1.656l-1.626,2.749l-1.126,1.75l-0.062,0.124 l-0.032,0.094l-0.22,2.375l-5.25,0.591h-0.031l-5.156,0.623h-0.031l-0.001,0.031l-6.375,1.246h-0.062l-3.344,0.123l-7.094,0.246 l-0.781-1.625l4.785-7.341l0.032-0.062l0.031-0.062l2.128-7.187l0.063-0.188l-0.062-0.156l-0.937-2.22l1.223-7.593l2.348-7.28 l0.625-0.437l2.156,0.907l0.125,0.031h0.156l3.031-0.529h0.156l0.125-0.125l2.502-2.655l0.062-0.062l0.031-0.062l1.595-3.155 l2.094-1.031l0.25-0.125l0.031-0.281l0.565-4.343l3.344,0.001l0.188,0.001l0.125-0.125l3.689-2.904l0.062-0.062l0.062-0.094 l1.346-2.594l1.969,0.095l0.188,0.001l0.156-0.125l4.285-3.53l0.031-0.031h0.031l2.97-3.217l4.906,1.19l0.094,0.031l3.593,1.596 l0.062,0.031l0.062,0.031l3.156,0.377h0.157l0.125-0.062l4.032-1.747h0.031l3.626-1.842l3.53,0.376h0.064l0.062,0.001l3.563-0.624 l1.155,1.002l-0.813,1.406l-0.031,0.094l-0.031,0.094l-0.126,1.906v0.125l0.062,0.094l0.749,1.781l0.062,0.156l0.125,0.094 l3.937,2.252l0.031,0.031H90.617z" />
    <path
      d="M69.789,89.138l0.999,2.125l-1.846,3.374l-0.031,0.062l-1.72,2.061l-0.156,0.188l0.061,0.252l0.592,2.907 v0.812l-7.19,2.996l-0.062,0.031l-4.501,1.247l-0.062,0.031l-0.062,0.031l-1.531,0.999l-0.25,0.156l0.031,0.313l0.093,1.219 l-2.125,0.53l-0.157,0.031l-0.094,0.125l-1.376,1.655l-0.062,0.062l-0.031,0.094l-1.002,2.781l-1.72,1.468l-2.906,0.842 l-0.095,0.031l-0.062,0.062l-2.47,2.124l-0.062,0.031l-3.627,2.279l-2.312,0.248l-0.219,0.031l-0.125,0.219l-1.282,2l-0.156,0.28 l0.188,0.282l1.061,1.5l-0.907,1.406l-2.407,1.436v-0.031l-3.47,1.873h-0.031l-0.031,0.031l-0.969,0.375l4.16-6.748l0.031-0.031 l0.031-0.062l1.126-3.155l0.063-0.125l-0.031-0.156l-0.998-3.907l0.783-3.062l4.939-1.904l0.063-0.031l0.063-0.033l4.845-3.247 l3.407-0.592h0.062l0.094-0.031l4.907-2.466l4.719-0.248l0.188-0.031l0.156-0.124l1.532-1.562l4.063-1.091l0.188-0.062 l0.094-0.156l2.283-3.53l0.125-0.219l-0.094-0.25l-1.654-4.032l-0.094-0.219l-0.219-0.062l-2.811-0.814l2.032-2.624L69.789,89.138 z" />
    <path
      d="M15.429,118.295l0.438,0.125l-0.094,0.469l-0.501,2.5l-0.032,0.125l-0.062,0.094l-2.532,3.28l-0.125,0.188 l-0.25-0.001l-7.313,0.246l-0.188,0.031l-0.125-0.094l-4.029-2.783l-0.562-0.406l0.531-0.406l2.282-1.78l0.062-0.031l0.093-0.033 l3.282-1.029l5.313-1.497l0.126-0.031l0.156,0.031L15.429,118.295z" />
    </g>
    <g id="kocaeli" onClick={setIlNameOnClick} data-plakakodu="41" data-alankodu="262" data-iladi="Kocaeli">
    <path
      d="M241.517,72.45l-3.346,3.498l-0.156,0.125l-0.219,0.031l-9.719,0.12h-0.094l-0.094-0.031 l-3.218-1.221l-2,0.593l-0.375,0.125l-0.188-0.594l-0.752,3.5l-0.031,0.219l-0.188,0.094l-3.939,2.279l-0.031,0.031l-2.626,1.249 l-3.032,1.498l-0.062,0.031l-0.062,0.031l-2.5,0.624l-0.219,0.031l-0.188-0.094l-3.718-2.252l-1.375-0.313l-2.47,1.311h-0.031 l-3.47,2.029l-0.563,1.969l-1.252,4.03l-0.031,0.062l-0.031,0.031l-1.22,2.28h0.281c0,0.443-0.001,2.546-0.002,3.125l3.438,0.408 l2.407-1.061l0.188-0.094l0.156,0.062l3.843,0.971l2.376-1.187l0.312-0.156l0.25,0.219l1,0.907l3.969,0.002h0.25l0.125,0.188 l1.374,1.689l9.25,0.505l0.281,0.031l0.125,0.219l0.749,1.281l0.188,0.281l-0.188,0.25l-1.782,2.405l-0.188,0.25l-0.312-0.062 L219,103.216l-4.562-0.002l-2.844,0.123h-0.062l-5.375,0.747h-0.031l-2.656,0.28h-0.156l-0.156-0.094l-0.188-0.125l-0.844,0.312 v0.031l-2.688,0.874l-0.689,2.656l-0.031,0.062l-0.031,0.062l-2.002,3.343l3.405,1.221l4.938-0.247l3.939-2.592h0.031l0.031-0.031 l2.532-1.124l0.219-0.125l0.25,0.125l2.874,1.658l4.843,2.472l0.062,0.031l2.219,0.657l3.313-2.717l0.094-0.094l0.125-0.031 l4.782-0.997h0.031l3.344-0.467l2.658-3.155l1.533-3.28l0.378-3.151h0.031l0.627-4.031l0.031-0.25l0.188-0.125l2.439-1.468 l0.252-3.062l-1.373-3.313l-0.031-0.062v-0.062l-0.248-3.156v-0.031v-0.031l0.002-3.781v-0.25l0.188-0.156l3.313-2.436l2.033-3.374 l-1.468-1.282L241.517,72.45z" />
    </g>
    <g id="yalova" onClick={setIlNameOnClick} data-plakakodu="77" data-alankodu="226" data-iladi="Yalova">
    <path
      d="M200.251,102.427l-0.906,0.781l-0.875,0.781l-0.156,0.125h-0.219l-2.25-0.126l-0.156-0.031 l-0.125-0.062l-0.906-0.656l-1.345,1.468l-0.125,0.156h-0.219l-15.594,0.116h-0.062l-3.688,0.467l-0.907,2l-0.094,0.188 l-0.219,0.094l-2.751,0.998l-2.156,0.873l-0.031,0.031h-0.062l-2.781,0.529l0.125,0.594l2.249,1.907l0.031,0.031l1.999,2.001 l3.875,0.127l1.876-1.124l1.439-2.53l0.156-0.219l0.25-0.031l1.781-0.124h0.125l0.156,0.062l3.155,1.721l2.75-0.123l4.312-0.123 l2.094-0.874l0.094-0.031h0.094l4.406,0.002l2.19-3.655v-0.031l0.752-2.875l0.062-0.25l0.25-0.094l2.939-0.998v0.031l0.219-0.094 l-0.812-0.531L200.251,102.427z" />
    </g>
    <g id="sakarya" onClick={setIlNameOnClick} data-plakakodu="54" data-alankodu="264" data-iladi="Sakarya">
    <path
      d="M246.578,74.578l-2.033,3.405l-0.062,0.094l-0.062,0.062l-3.22,2.373l-0.002,3.5v0.031 l0.248,3.031l1.342,3.345l0.062,0.125l-0.031,0.125l-0.252,3.406v0.25l-0.219,0.125l-2.47,1.53l-0.596,3.781l-0.377,3.156v0.094 l-0.031,0.062l-1.658,3.53l-0.031,0.062l-0.031,0.062l-2.783,3.279l-0.125,0.125l-0.188,0.031l-3.531,0.529v-0.031l-4.689,0.997 l-3.063,2.529l0.28,1.188v0.062l0.031,0.062l0.03,1.719v0.031l0.718,2.688l1.124,1.845l1.937,1.032l2.781,0.002h0.25l0.156,0.188 l1.561,1.939l0.031,0.031l0.031,0.031l2.624,2.157l0.031,0.031l0.062,0.031l0.938,0.439l2.032-1.249l0.125-0.062h0.156l6.562,0.504 l0.156,0.031l0.125,0.094l1.905,1.501l0.188,0.156v0.25l-0.001,1.219l2.53,1.501l2.124,1.251l0.656,0.344l1.345-1.937l0.626-0.969 l-0.561-2.031l-0.031-0.094v-0.062l0.126-2.656v-0.188l0.125-0.125l2.846-3.092l0.845-2.531l0.125-0.375l0.375,0.031l10.688,0.256 l1.907-1.405l-0.466-4.372l-0.031-0.031l0.031-0.062l0.376-2.656v-0.125l0.094-0.125l2.627-3.561l-0.842-3.031l-2.5-0.563 l-0.406-0.094v-0.406l0.003-5.531v-0.094l0.031-0.094l1.408-3.53l0.062-0.156l0.125-0.094l3.282-2.154l2.971-3.092l0.564-2.688 l-0.749-2.531l-7.25-0.879h-0.031h-0.031l-5.155-1.253l-0.062-0.031l-0.062-0.031l-4.155-2.127l-5.311-1.222l-0.031-0.031h-0.031 l-4.78-1.628L246.578,74.578z" />
    </g>
    <g id="bilecik" onClick={setIlNameOnClick} data-plakakodu="11" data-alankodu="228" data-iladi="Bilecik">
    <path
      d="M222.273,117.908l-3.095,1.123l-2.94,3.779l-0.031,0.031l-1.44,4.28l-0.003,6.281v0.125 l-0.031,0.125l-1.533,2.874l-0.031,0.095l-0.062,0.062l-4.314,4.092l-0.657,2.031l0.5,0.812l0.062,0.094v0.094l0.529,3.469v0.062 l1.187,2.251l0.031,0.031v0.062l0.53,1.781v0.062v0.062l-0.002,4.034v0.094l-0.031,0.094l-0.751,1.906v0.031h-0.031l-0.876,1.656 l-0.156,0.25h-0.156l-0.13,8.656l0.749,2.125l1.469,0.22l0.062,0.031l0.094,0.031l2.53,1.345l2.906,0.627l0.031,0.031h0.062 l2.311,1.126l0.094,0.031l2.562,0.595l1.344,0.001l0.157-1.406l-1.78-1.095l-0.219-0.156v-0.25l-0.123-3.281v-0.188l0.094-0.125 l1.126-1.53h0.031l2.157-2.53l0.062-0.094l0.125-0.062l2.125-0.874l0.094-0.031H227l6.938-0.121l1.625-0.811l0.062-0.031 l1.22-1.249l1.657-2.124v-0.031l0.031-0.031l1.126-1.124l0.125-0.125l0.156-0.031l2.406-0.468l2.157-1.343l0.439-2.188v-0.032 l0.846-3.156l0.062-0.219l0.188-0.094l1.281-0.749l0.031-0.031l1.095-1.343l0.031-0.031l1.22-1.968l0.125-0.188l0.156-0.031 l2.094-0.593v-0.031l1.906-0.874l0.031-0.031h0.062l1.875-0.405l-0.031-0.312l0.219-0.031l-0.749-1.281v-0.031h-0.031l-0.624-1.25 v-0.031l-0.624-1.375l-0.031-0.094l-0.031-0.094l-0.123-2.875l-0.999-1.126h-0.031l-2.093-1.157h-0.031l-2.155-1.282l-2.749-1.626 l-0.25-0.156v-0.281l0.001-1.281l-1.624-1.251l-6.219-0.503l-2.126,1.311l-0.25,0.156l-0.25-0.125l-1.25-0.626l-0.062-0.031 l-0.031-0.031l-2.781-2.285l-0.031-0.031l-0.031-0.031l-1.499-1.845l-2.688-0.001h-0.125l-0.094-0.062l-2.155-1.127l-0.125-0.062 l-0.062-0.125l-1.249-2.032l-0.031-0.062l-0.031-0.062L222.273,117.908z" />
    </g>
    <g id="bursa" onClick={setIlNameOnClick} data-plakakodu="16" data-alankodu="224" data-iladi="Bursa">
    <path
      d="M211.747,109.715l-2.22,0.999l-4.063,2.654l-0.094,0.062l-0.156,0.031l-5.156,0.247h-0.125 l-0.094-0.031l-3.53-1.283l0.25-0.688l-0.281,0.469l-0.125,0.25h-0.281l-4.562-0.002l-2.094,0.843l-0.062,0.031l-0.094,0.031 l-4.406,0.123l-2.906,0.123h-0.156l-0.125-0.062l-3.155-1.721l-1.344,0.093l-1.376,2.437l-0.062,0.125l-0.125,0.062l-0.378,0.219 l0.344,0.188l1.125,0.157h0.031h0.031l2.188,0.501l0.094,0.031l0.094,0.062l1.249,1.001l1.593,1.22l0.125,0.094l0.062,0.156 l0.405,1.188l0.125,0.438l-0.406,0.188l-2.907,1.217l-1.251,1.561l-0.062,0.094l-0.094,0.062l-2.282,1.061l-0.094,0.062h-0.125 c0,0-5.135,0.028-5.656,0.028c-0.252,0-0.444-0.075-0.656-0.156s-0.428-0.181-0.625-0.281c-0.394-0.2-0.719-0.375-0.719-0.375 s-0.464-0.294-0.969-0.595c-0.505-0.3-1.114-0.642-1.219-0.689c0.003,0.001-0.337-0.111-0.719-0.219 c-0.382-0.108-0.871-0.219-1.344-0.345c-0.473-0.125-0.919-0.251-1.281-0.345c-0.31-0.079-0.499-0.11-0.562-0.125 c-0.003-0.001-0.029,0.001-0.031,0c-0.087,0.03-0.221,0.061-0.375,0.125c-0.308,0.128-0.723,0.317-1.125,0.499 c-0.402,0.183-0.81,0.356-1.125,0.499c-0.157,0.072-0.27,0.141-0.375,0.188c-0.052,0.023-0.117,0.046-0.156,0.062 s-0.038,0.041-0.125,0.062c-0.078,0.019-0.081-0.006-0.125,0s-0.123,0.024-0.188,0.031c-0.129,0.014-0.299,0.012-0.5,0.031 c-0.402,0.038-0.912,0.086-1.438,0.124c-0.526,0.039-1.042,0.077-1.469,0.093c-0.213,0.008-0.408,0.003-0.562,0 c-0.077-0.002-0.151,0.007-0.219,0s-0.125-0.009-0.25-0.062c0.029,0.012-0.299-0.1-0.688-0.219s-0.893-0.264-1.375-0.407 c-0.964-0.285-1.875-0.563-1.875-0.563l-5.811-1.503l-7.219-0.66h-0.062l-0.062-0.031l-3.311-1.127l-2.97,1.717l-0.094,0.125 l-3.033,4.529l-0.031,0.031l-0.031,0.062l-1.72,1.687l0.561,2.625l0.031,0.062v0.031l0.248,4.406l1.123,3.657v0.031l2.092,3.407 l0.031,0.062v0.031l1.123,3.439l0.031,0.062v0.094l-0.127,3.938l1.686,3.22l0.03,0.065l1.905,2.72l6.81,2.973l0.156,0.062 l0.094,0.156l1.998,3.532l1.468,1.657l6.344,0.253l2.689-1.093l0.469-0.188l0.188,0.438l1.248,3.032l0.031,0.031v0.062l0.717,3.188 l1.936,2.876l2.185,1.565l2.282-1.03l0.125-0.062l0.125,0.031l4.062,0.377h0.125l0.094,0.094l2.999,2.096l0.031,0.031l4.78,1.315 l3.126,0.002l2.001-1.437v0.031l1.626-1.53l2.003-5.343l0.062-0.125l0.125-0.094l2.657-1.78l3.345-1.967l1.22-1.437l0.128-5.781 l0.031-0.5h0.5l2.906,0.127l0.156,0.031l0.156,0.094l2.561,2.22l0.062,0.062l1.062,0.626l9.969,0.005l0.689-1.312l0.031-0.062 l0.689-1.75l0.002-3.906v-0.031l-0.437-1.531l-0.031-0.094l-1.218-2.313l-0.062-0.062v-0.094l-0.467-3.406l-0.593-0.938 l-0.125-0.219l0.062-0.219l0.751-2.375l0.062-0.125l0.097-0.094l4.377-4.154l0.031-0.031l1.345-2.624l0.003-6.344v-0.094 l0.031-0.062l1.533-4.437l0.031-0.062l0.031-0.062l3.033-3.904l0.094-0.125l0.125-0.062l3.345-1.217v-0.031l0.125-0.031l-0.03-1.25 l-0.249-1.094l-2.375-0.72h-0.062l-0.031-0.031l-4.937-2.534L211.747,109.715z" />
    </g>
    <g id="balikesir" onClick={setIlNameOnClick} data-plakakodu="10" data-alankodu="266" data-iladi="Balıkesir">
    <path
      d="M104.629,97.282l0.312,0.156c0,0,1.312,0.699,2.688,0.813c0.907,0.076,1.528,0.579,1.843,1.032 c0.316,0.453,0.375,0.906,0.375,0.906l0.094,0.5l-0.5,0.062l-3.5,0.529c-0.002,0.001-0.029-0.001-0.031,0 c-0.142,0.086-0.645,0.424-1.344,0.843c-0.791,0.475-1.58,0.96-1.907,1.124c-0.22,0.11-0.432,0.072-0.594,0.031 s-0.296-0.109-0.438-0.188c-0.284-0.156-0.578-0.347-0.844-0.562c-0.531-0.431-1-0.907-1-0.907l-0.125-0.125v-0.188l-0.123-2.781 l-0.031-0.625l0.594,0.094l3.094,0.471l1.189-0.999L104.629,97.282z" />
    <path
      d="M108.435,108.127l-0.781,0.875c0,0-0.058,0.094-0.094,0.188c-0.012,0.033-0.03,0.051-0.031,0.062 c0.128,0.114,0.618,0.436,1.031,0.72c0.206,0.141,0.403,0.281,0.562,0.406c0.08,0.063,0.12,0.118,0.188,0.188 c0.034,0.035,0.087,0.067,0.125,0.125c0.02,0.03,0.042,0.105,0.062,0.156c0.006,0.009,0.025,0.019,0.062,0.062 c0.075,0.088,0.189,0.212,0.312,0.344c0.123,0.132,0.26,0.298,0.375,0.438c0.115,0.14,0.211,0.223,0.281,0.469 c0.023,0.081,0.22,0.564,0.374,0.969c0.155,0.405,0.281,0.781,0.281,0.781l0.094,0.219l-0.125,0.188c0,0-0.003,0.066,0,0.125 c0.003,0.058-0.052,0.098,0.219,0.219c0.758,0.337,2.999,1.19,2.999,1.19l0.219,0.094l0.094,0.219l0.843,2.562l0.094,0.281 l-0.219,0.219l-0.938,0.905l-0.312-0.344l0.156,0.375c-0.646,0.299-1.601,0.68-2.532,1.124s-1.812,0.973-2.282,1.53l-0.188,0.25 l-0.312-0.094l-7.374-1.754l-5.562,0.747l-0.031-0.219l-1.376,2.718l-0.062,0.125l-0.094,0.094l-3.97,2.56l-0.094,0.062 l-2.501,2.53l0.654,2.906l2.093,2.563l0.062,0.094l0.031,0.094l1.122,4.689l0.031,0.031v0.062l0.123,3.906l0.124,1.719v0.031 l0.718,2.031l0.062,0.125l-0.031,0.156l-0.907,3.283v0.031v0.031l-1.252,3.28l-0.062,0.125l-0.094,0.094l-3.032,2.373 l-0.062,0.031l-0.031,0.031l-4.157,2.154h-0.064l-0.031,0.031l-3.407,1.123l-0.062,0.031h-0.062l-3,0.248h-0.219l-0.125-0.094 l-2.53-1.907l-2.405-1.751l-3.437-1.471h-0.031l-1.905-0.97l-1.595-0.374l-2.125,0.218l-2.439,1.811l-0.031,0.031l-0.062,0.031 l-1.782,0.75l-0.094,0.062H57.82l-3.469-0.002h-0.062l-4.625,0.591l-0.751,1.406v0.031l-1.658,2.78l-1.095,1.718l-0.157,2 l2.531-0.561l0.062-0.031h0.031l5.188-0.153h0.156l0.125,0.062l1.405,0.939l3.375-0.81l0.094-0.031h0.062l2.344,0.189l0.25,0.031 l0.125,0.219l1.437,2.501l0.125,0.25l-0.125,0.25l-1.783,3.374l-0.062,0.156l-0.156,0.062l-2.751,1.467l-0.19,2.938l-0.031,0.438 l-0.438,0.031l-3.625,0.154l-0.001,1.844v0.281l-0.281,0.156l-1.939,1.061l-2.407,1.374l-0.031,0.031l-0.062,0.031l-2.063,1.905 l-0.156,0.125h-0.188l-1.375-0.001l-0.531,0.594l2.281,0.001h0.125l0.125,0.094l1.438,0.876l0.25,0.156l-0.031,0.312l-0.127,3.188 l1.281,0.376l3.095-1.467l1.907-1.749l0.031-0.062l0.093-0.032l3.282-1.529l0.094-0.031h0.094l2-0.124l2.157-1.437l2.907-1.998 l0.062-0.062l0.094-0.031l3.188-0.842l0.094-0.031l1.656-0.843l0.219-0.125l0.219,0.125l1.812,0.845l0.094,0.031l3.812,0.846 h0.031v0.031l4.937,1.628l1.189-1.937l0.156-0.219h0.281l3.906,0.002h0.125l0.094,0.031l1.656,0.907l0.062,0.031l0.031,0.031 l3.154,3.033l2.03,1.001l5.97,0.003h0.156l0.125,0.094l1.28,0.939l3.688,0.252h0.094l3.688-0.498l0.531-0.094l0.031,0.531 l0.372,4.781l1.437,2.313l0.031,0.031v0.031l1.31,2.782l1.968,1.595l2.374,1.876l0.062,0.062l0.062,0.062l2.092,3.126l0.031,0.031 l2.093,2.563l4.312,0.002c0,0,0.593-0.146,1.25-0.374c0.657-0.229,1.412-0.598,1.562-0.749c0.305-0.305,0.69-0.377,1.094-0.437 c0.404-0.061,0.847-0.071,1.281-0.061c0.434,0.009,0.843,0.037,1.188,0.063c0.345,0.025,0.655,0.031,0.719,0.031 c-0.02,0,0.158-0.018,0.375-0.094c0.217-0.076,0.504-0.174,0.75-0.281c0.491-0.215,0.906-0.438,0.906-0.438l0.125-0.062h0.094 c0,0,5.804,0.003,6.688,0.004c0.251,0,1.299-0.25,2.156-0.499c0.857-0.249,1.625-0.468,1.625-0.468l0.031-0.031h0.031l2.406-0.437 l0.095-1.5l-0.969-0.876l-0.094-0.062l-0.031-0.094l-0.874-1.875l-0.062-0.125v-0.125l0.126-2.281l0.031-0.25l0.219-0.156 l1.5-0.874h0.032l1.125-0.624l0.094-0.062h0.094l4.469-0.498l3.532-1.092l3.407-2.06l1.032-2.311l0.378-5.312v-0.062l0.031-0.031 l0.501-1.781l0.031-0.125l0.094-0.094l1.939-1.937l1.784-4.811l-0.875-0.594l-3.844-0.377l-2.345,1.093l-0.281,0.094l-0.219-0.156 l-2.53-1.782l-0.062-0.031l-0.062-0.094l-2.029-3.032l-0.031-0.062l-0.031-0.094l-0.717-3.188l-0.031-0.062v-0.031l-1.061-2.501 l-2.313,0.968l-0.094,0.031h-0.125l-6.688-0.254l-0.219-0.031l-0.125-0.156l-1.655-1.876l-0.031-0.062l-0.031-0.031l-1.904-3.376 l-6.81-2.973l-0.125-0.062l-0.094-0.125l-1.998-2.907l-0.031-0.031v-0.031l-1.779-3.407l-0.062-0.094v-0.156l0.127-3.938 l-1.06-3.22l-2.123-3.532l-0.031-0.062l-0.031-0.062l-1.123-3.782l-0.036-0.065v-0.062l-0.248-4.344v-0.062l-0.623-2.844 l-0.062-0.25l0.188-0.219l1.845-1.811l0.062-0.062l2.658-3.999l-1.094-0.595l-2.719-0.033l-1.562,0.874l-0.125,0.062h-0.125 l-4.625-0.003h-0.094l-0.094-0.062l-1.438-0.563l-0.188-0.062l-0.062-0.188l-1.187-2.376l-0.188-0.375l0.375-0.25l1.657-1.155 l1.344-0.905l0.031-0.031l2.313-1.155l0.062-0.031l1.312-0.905l-0.031-0.156l-2.312-0.876v-0.031c0,0-0.571-0.226-1.156-0.47 c-0.293-0.121-0.576-0.256-0.812-0.344c-0.118-0.044-0.241-0.072-0.312-0.094c-0.036-0.011-0.08-0.026-0.094-0.031 c-0.256-0.009-0.528-0.072-0.844-0.125c-0.34-0.057-0.656-0.094-0.656-0.094h-0.031l-0.031-0.031l-2.594-0.907h-0.03l-2.812-0.033 l-0.156-0.031l-0.125-0.062c0,0-0.24-0.174-0.5-0.344c-0.13-0.085-0.272-0.194-0.375-0.25c-0.051-0.028-0.104-0.023-0.125-0.031 C109.18,108.127,108.667,108.127,108.435,108.127z" />
    </g>
        </svg>
    </div>

    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>{ilName} Gezilecek Yerler</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Carousel>
            {places.map((place, i) => (
            <div key={i}>
              <img src={place.photo} />
              <p className="legend">{place.name}
              <a target="_blank" className="map" href={place.map}>
                <img className="mapLink" src={map} alt="" />
              </a>
              </p>
            </div>
            ))}
        </Carousel>
        </Modal.Body>
      </Modal>
      </>
    </>
  )
}

export default Marmara
