import "../components/style/same.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import akdenizJson from "./assets/karadeniz.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import map from "./assets/map.png"

function Karadeniz() {
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
    <h2 className="title">Karadeniz Bölgesi</h2>
        <svg version="1.1" id="svg-turkiye-haritasi" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1007.478 527.323" xmlSpace="preserve">
        <g id="amasya"  onClick={setIlNameOnClick} data-plakakodu="05" data-alankodu="358" data-iladi="Amasya">
    <path
      d="M486.914,88.991l-1.157,2.655l-0.031,0.062c-0.017,0.06-0.196,0.75-0.407,1.562 c-0.11,0.423-0.232,0.861-0.313,1.219c-0.08,0.358-0.125,0.707-0.125,0.688c0,0.043,0.052,0.381,0.094,0.781 s0.084,0.901,0.124,1.406s0.068,1.025,0.061,1.469s0.003,0.786-0.22,1.156c-0.247,0.412-0.658,0.814-1.032,1.187 c-0.305,0.305-0.473,0.481-0.562,0.562l-0.376,1.969v0.094l-0.062,0.094l-0.751,1.219l0.437,1.531v0.031v0.031l0.498,3.156 l2.433,2.908c0.043,0.039,0.265,0.254,0.594,0.5c0.179,0.134,0.373,0.255,0.531,0.344c0.158,0.089,0.311,0.125,0.25,0.125 c0.001,0,0.26-0.026,0.531-0.094s0.595-0.188,0.906-0.281c0.623-0.187,1.188-0.343,1.188-0.343l0.062-0.031h0.094 c0,0,3.9,0.002,4.531,0.002c0.358,0,0.642,0.102,1.031,0.251s0.826,0.339,1.25,0.532c0.847,0.384,1.625,0.782,1.625,0.782 l0.125,0.062l0.094,0.125l1.374,2.439c0.281,0.053,1.846,0.383,2.438,0.501c0.205,0.041,0.347,0.092,0.5,0.188 s0.293,0.24,0.469,0.375c0.351,0.27,0.76,0.597,1.155,0.939c0.396,0.341,0.799,0.671,1.124,0.939 c0.326,0.267,0.627,0.47,0.625,0.469c0.318,0.127,0.575,0.353,0.969,0.657c0.394,0.303,0.875,0.666,1.311,1.032 c0.874,0.731,1.655,1.439,1.655,1.439l0.156,0.156v0.219l-0.001,1.906v0.188l-0.125,0.156l-1.782,1.78l-2.72,2.687l-0.72,1.469 v0.031l-0.031,0.031l-2.44,3.655l-0.001,1.656l0.468,1.156l0.062,0.156l-0.031,0.156l-0.782,2.906l-0.626,2.562l3.281,0.314 l1.501-2.624v-0.031l0.031-0.031l1.876-2.499l0.062-0.062l0.062-0.062c0,0,0.511-0.363,1.094-0.718 c0.291-0.178,0.593-0.359,0.875-0.5s0.488-0.25,0.844-0.25c0.001,0,0.354-0.055,0.75-0.125s0.872-0.156,1.344-0.249 c0.894-0.179,1.665-0.325,1.75-0.343l3.22-1.998h0.031l3.439-1.748l2.157-2.499l1.502-4.061l0.219-0.625l0.531,0.375 c0,0,0.38,0.261,0.875,0.531s1.116,0.501,1.344,0.501c0.114,0,0.603-0.051,1.156-0.155c0.553-0.105,1.208-0.233,1.844-0.374 c1.273-0.282,2.438-0.561,2.438-0.561l0.406-0.125l0.188,0.406l0.905,2l4.094,0.721c0.082-0.008,0.973-0.1,2.031-0.249 c0.553-0.078,1.14-0.178,1.625-0.28s0.898-0.223,1-0.28c0.79-0.451,2.764-1.768,2.97-1.904l1.063-2.218l-1.593-1.376l-0.219-0.188 l0.062-0.312l0.501-2.25l0.062-0.344l0.375-0.062l6.312-0.747l0.188-0.031l0.188,0.125c0,0,0.526,0.445,1.125,0.876 c0.3,0.215,0.61,0.443,0.875,0.594s0.513,0.188,0.438,0.188c0.216,0,0.678-0.069,0.938-0.187c0.025-0.011,0.011-0.019,0.031-0.031 c-0.183-0.185-0.589-0.558-1.031-0.907c-0.513-0.404-0.969-0.751-0.969-0.751l-0.125-0.062l-0.062-0.156l-0.749-1.875l-0.062-0.156 l0.031-0.156l1.253-4.874l0.282-2.125l0.031-0.312l0.281-0.094l3.501-1.373l-0.218-1l-4.188-0.596l-0.438-0.062v-0.438l0.127-3.781 h0.281L553.562,102h-0.094l-0.062-0.062l-3.217-2.132l-0.5-0.344l0.406-0.438l2.063-2.187c-0.435-0.085-0.69-0.142-1.469-0.282 c-1.244-0.223-2.697-0.439-3.094-0.44c-0.758,0-1.484-0.407-2.094-0.782c-0.325-0.2-0.368-0.263-0.562-0.406l-1.189,2.343 l-1.596,3.061l-0.031,0.062l-0.062,0.062l-4.658,4.466l-0.156,0.156l-0.25-0.031l-5.188-0.722h-0.031l-0.031-0.031l-7.218-2.285 h-0.031l-8.719-0.724l-0.25-0.031l-0.125-0.188l-1.967-2.813l-3.344-0.002h-0.094l-0.094-0.062l-3.216-1.407l-0.438-0.188 l0.188-0.469l0.97-2.499c-0.036-0.121-0.083-0.383-0.25-0.75c-0.101-0.223-0.239-0.435-0.344-0.562 c-0.052-0.064-0.077-0.11-0.094-0.125c-0.274,0-1.756,0.066-3.094,0.154c-1.306,0.086-2.473,0.182-2.531,0.187 c-0.001,0-0.062,0-0.062,0l-4.939,1.059h-0.062h-0.094l-2.875-0.346l-0.156-0.031l-0.125-0.125l-4.154-3.971L486.914,88.991z" />
    </g>
    <g id="artvin"  onClick={setIlNameOnClick} data-plakakodu="08" data-alankodu="466" data-iladi="Artvin">
    <path
      d="M837.06,50.525c-0.012,0.005-0.01,0.015-0.031,0.031c-0.07,0.056-0.193,0.15-0.312,0.281 c-0.24,0.262-0.534,0.628-0.812,1c-0.558,0.743-1.063,1.499-1.063,1.499l-0.062,0.094l-0.062,0.062l-3.782,2.498l-0.188,0.125 l-0.219-0.031l-3.937-1.033l-4.811-1.378v-0.031l-5.218-1.659l-2.283,3.124c0,0-0.749,1.075-1.47,2.218 c-0.36,0.572-0.706,1.149-0.97,1.624c-0.132,0.238-0.243,0.438-0.312,0.594c-0.044,0.097-0.081,0.159-0.094,0.188 c0,0.028-0.003,0.031,0,0.031c-0.008,0.207-0.085,0.345-0.156,0.438c-0.075,0.098-0.156,0.17-0.25,0.25 c-0.188,0.161-0.441,0.324-0.719,0.5c-0.555,0.352-1.252,0.75-1.97,1.124c-1.39,0.725-2.699,1.335-2.782,1.373l-2.032,1.374 l1.716,4.876l2.06,3.063l3.124,2.44l0.062,0.031l0.031,0.062l2.124,2.657l0.312,0.375l-0.344,0.312l-2.813,2.623l-0.062,0.062 l-4.565,5.998h-0.031l-5.473,6.716l-0.658,3.781l-0.031,0.062l-0.034,0.064l-0.094,0.219l4.999,2.659l0.062,0.031l4.593,1.784 l0.312,0.125v0.344l-0.005,8.875v0.031l0.967,3.126l1.875,0.095l3.784-4.592l0.031-0.031l0.031-0.031l3.94-3.217l0.031-0.062 l0.062-0.031l2.876-1.248l0.188-0.062l0.156,0.062l3.749,1.252h0.031l2.25,0.813l1.907-1.468v0.031l2.907-2.404l1.377-3.061 l0.158-4.25l-0.655-1.875l-0.062-0.125l0.031-0.125l0.345-2.125l0.031-0.094l0.031-0.094l2.158-3.905l0.091-0.19l0.219-0.062 l2.844-0.717h0.062h0.062l5.531,0.003h0.031h0.031l4.75,0.691l5.031,0.003l1.847-5.187V83.1v-0.031l2.691-5.53l3.034-5.717 l0.031-0.062l0.031-0.031l3.158-3.842l0.062-0.094l3.065-5.436l-0.967-2.939l-2.28-2.751v-0.031l-0.031-0.031l-2.186-3.282 l-0.969,0.78l-0.219,0.188l-0.281-0.125l-4.311-1.846l-0.125-0.031l-3-0.502v0.031l-4.812-0.534l-5.188-0.628h-0.125l-4.156,0.498 l-0.094,0.031l-0.062-0.031c0,0-0.838-0.155-1.75-0.313c-0.456-0.079-0.928-0.161-1.312-0.22c-0.322-0.049-0.525-0.084-0.625-0.094 C837.091,50.525,837.065,50.525,837.06,50.525z" />
    </g>
    <g id="bartin" onClick={setIlNameOnClick}  data-plakakodu="74" data-alankodu="378" data-iladi="Bartın">
    <path
      d="M369.788,35.364c-0.297,0.087-1.25,0.374-1.25,0.374h-0.062h-0.031l-6.281,0.778h-0.031 l-6.94,3.215v0.031h-0.031l-6.563,2.527c-0.215,0.161-4.978,3.771-5.533,4.216c-0.65,0.52-5.314,4.153-5.314,4.153l-0.065,0.032 l-0.031,0.031l-1.625,0.749l5.468,2.441l0.281,0.094v0.312l0.279,3.094v0.031l0.624,2.062l0.031,0.031l2.279,3.001l0.188,0.25 l-0.125,0.251l-0.845,1.75l0.06,2.844l0.718,1.75l4.97-1.497h0.031c0.109-0.062,1.117-0.64,2.313-1.28 c0.629-0.337,1.262-0.679,1.813-0.937c0.275-0.129,0.534-0.232,0.75-0.312c0.216-0.08,0.379-0.156,0.625-0.156 c-0.067,0,0.055-0.029,0.219-0.094s0.382-0.16,0.625-0.281c0.486-0.243,1.081-0.573,1.656-0.905 c1.101-0.634,2.039-1.195,2.126-1.249l3.128-5.936l0.125-0.219l0.219-0.062l5.126-1.216l2.626-1.78l-1.249-1.532l-0.125-0.188 l0.031-0.219l0.345-2.656l0.031-0.25l0.188-0.125l3.782-2.436l-1.436-3.313l-0.031-0.062l-2.092-3.876l-0.031-0.031l-0.03-0.064 L369.788,35.364z" />
    </g>
    <g id="bayburt" onClick={setIlNameOnClick}  data-plakakodu="69" data-alankodu="458" data-iladi="Bayburt">
    <path
      d="M745.429,119.569l-0.314,3.812l-0.031,0.469h-0.469c0,0-0.968,0.007-1.625-0.157 c-0.441-0.11-2.395-0.543-2.625-0.595l-2.345,1.093h-0.031l-2.032,1.687l-0.031,0.031c-0.022,0.034-0.719,1.123-1.532,2.311 c-0.413,0.604-0.863,1.241-1.251,1.749s-0.646,0.857-1.001,1.093c-0.013,0.009-0.13,0.151-0.188,0.406s-0.062,0.611-0.063,0.969 s0.008,0.721,0.03,1.031c0.023,0.31,0.062,0.53,0.062,0.719c0,0.169,0.061,1.18,0.124,2.062s0.124,1.688,0.124,1.688 c0.095,0.199,0.944,1.96,1.217,2.782c0.203,0.608,0.015,1.204-0.157,1.688c-0.172,0.484-0.375,0.875-0.375,0.875l-0.031,0.062 l-0.062,0.062c0,0-4.676,4.173-5.815,5.185c-0.493,0.439-1.268,1.407-1.876,2.249c-0.572,0.792-0.95,1.389-1.001,1.468 c0.008,0.293,0.122,4.151,0.122,4.969c0.017,0.014,0.069,0.042,0.156,0.094c0.174,0.104,0.456,0.224,0.75,0.312 c0.587,0.176,1.188,0.251,1.188,0.251l0.094,0.031l0.094,0.031l4.437,2.471c0.183-0.227,0.505-0.652,1.095-1.343 c0.366-0.43,0.742-0.874,1.095-1.249c0.352-0.376,0.655-0.687,0.938-0.874c0.822-0.548,3.375-1.982,3.97-2.279 c0.313-0.156,0.583-0.168,1-0.218c0.417-0.051,0.898-0.085,1.406-0.124c1.016-0.078,2.121-0.17,2.406-0.218 c0.259-0.043,1.339-0.357,2.281-0.655s1.812-0.593,1.812-0.593l0.062-0.031h0.094c0,0,1.621,0.047,3.344,0.096 c0.861,0.024,1.737,0.065,2.469,0.095s1.269,0.053,1.562,0.095c0.515,0.074,1.783,0.357,2.969,0.627s2.281,0.501,2.281,0.501 l-0.031,0.094l0.188,0.062c0,0,0.536,0.161,1.219,0.313c0.683,0.151,1.542,0.276,1.938,0.189c1.217-0.269,3.017-0.432,4.251-1.217 c1.32-0.839,1.896-1.644,2.813-2.56c0.901-0.901,3.158-3.06,3.158-3.06l0.062-0.031l0.031-0.031c0,0,0.659-0.392,1.375-0.874 c0.358-0.241,0.724-0.517,1.031-0.749s0.566-0.458,0.625-0.531c0.192-0.239,0.595-0.892,0.939-1.531s0.656-1.279,0.782-1.531 c0.004-0.007,0.107-0.312,0.188-0.656c0.081-0.344,0.141-0.75,0.22-1.156c0.076-0.398,0.074-0.493,0.125-0.781l-1.781,0.593 c-0.067,0.134-0.126,0.29-0.344,0.562c-0.15,0.188-0.343,0.357-0.594,0.5s-0.598,0.238-0.938,0.124 c-0.592-0.197-1.136-0.701-1.624-1.157c-0.419-0.391-0.66-0.653-0.75-0.75l-3.719-0.346l-0.156-0.031l-0.125-0.094 c0,0-0.626-0.546-1.28-1.251c-0.328-0.352-0.676-0.757-0.937-1.157c-0.262-0.399-0.469-0.781-0.468-1.25 c0.001-1.21,0.252-3.219,0.252-3.219l0.062-0.375l0.375-0.062c0,0,0.755-0.098,1.469-0.249c0.357-0.076,0.692-0.164,0.906-0.25 c0.036-0.014,0.036-0.018,0.062-0.031c-0.153-0.655-0.411-1.818-0.437-1.938l-1.718-2.439l-0.156-0.219l0.125-0.281l1.752-3.655 l1.063-2.343l-2.657,0.999l-0.219,0.094l-0.188-0.125l-2.749-1.44l-1.625,0.749l-0.062,0.031h-0.062l-7.689,1.246l-0.094,0.031 l-0.125-0.031l-5.53-1.441h-0.031l-0.031-0.031L745.429,119.569z" />
    </g>
    <g id="bolu"  onClick={setIlNameOnClick} data-plakakodu="14" data-alankodu="374" data-iladi="Bolu">
    <path
      d="M334.945,88.877l-3.439,1.029l-0.062,0.031h-0.094l-10.938-0.006c0,0-0.753,0.154-1.594,0.374 c-0.741,0.195-1.468,0.458-1.812,0.593l-0.314,3.344v0.188l-0.156,0.125l-3.033,2.904l-0.094,0.094l-0.125,0.031l-4.407,1.123 h-0.031l-4.532,1.029h-0.031l-3.344,0.467c-0.095,0.127-0.419,0.553-0.845,1.156c-0.242,0.343-0.468,0.704-0.657,1 c-0.188,0.296-0.328,0.595-0.312,0.531c-0.101,0.405-0.386,0.988-0.657,1.562c-0.255,0.54-0.442,0.945-0.47,1l0.122,4.875v0.219 l-0.126,0.125l-1.876,2.155l-0.125,0.125l-0.156,0.031l-4.657,1.122l-0.125,0.031l-0.156-0.031l-4.155-1.252l-0.062-0.031 l-0.062-0.031l-1.905-1.189l-11.188,0.119h-0.031h-0.031l-2.094-0.251h-0.062h-0.156l-0.313,2.094v0.062v0.062l0.529,4.562 l0.031,0.281l-0.25,0.156l-2.282,1.655l-0.125,0.094h-0.156l-10.5-0.256l-0.782,2.312l-0.031,0.094l-0.066,0.065l-2.783,3.029 l-0.126,2.312v0.031l0.624,2.25l0.062,0.219l-0.125,0.188l-0.782,1.125v0.031l-1.282,1.843l0.594,0.312l0.094,0.062l0.062,0.062 l1.249,1.376l0.125,0.125v0.188l0.123,2.906l0.593,1.312l0.624,1.25v0.031l0.999,1.657l2.781-0.217h0.125l0.125,0.031l1.562,0.72 h0.031l2.624,1.032l1.5-0.187l2.157-1.093l2.689-1.343l2.501-1.093l0.094-0.031h0.062l3.469-0.404l1.345-1.437l0.062-0.062 l1.439-2.093l1.033-4.03v-0.031l0.031-0.031l1.063-2.249l0.125-0.25l0.281-0.031l1.781-0.187h0.156l0.125,0.062l2.124,1.063 l2.874,1.346h0.031l1.874,1.095l2.875-0.498h0.031l3.844-0.467h0.188l0.156,0.094l1.343,1.001l0.031,0.031l0.031,0.031l1.249,1.439 l3.437,1.533l5.469,0.065l1.75-0.905l0.031-0.031c0,0,0.636-0.25,1.375-0.499c0.739-0.25,1.52-0.499,2.125-0.499 c0.784,0,7.274,0.004,7.594,0.004l1.751-1.155l0.031-0.031l3.189-2.373l0.031-0.031l0.031-0.031c0,0,0.648-0.34,1.344-0.687 c0.348-0.174,0.701-0.328,1-0.468c0.299-0.141,0.482-0.253,0.719-0.312c-0.041,0.01,0.033-0.02,0.125-0.062 c0.092-0.042,0.205-0.085,0.344-0.156c0.277-0.143,0.636-0.348,0.969-0.53c0.665-0.366,1.281-0.718,1.281-0.718h0.031l6.314-3.028 h0.031l2.626-1.593l4.001-2.748l0.031-0.031h0.031l2.157-1.093l-0.343-1.625c-0.079-0.082-0.422-0.443-0.905-0.938 c-0.267-0.272-0.551-0.555-0.781-0.781s-0.449-0.423-0.469-0.438c-0.215-0.161-0.327-0.421-0.344-0.625s0.048-0.388,0.094-0.531 c0.091-0.287,0.219-0.5,0.219-0.5l0.062-0.094l0.094-0.062l1.939-1.187l0.563-1.094l0.125-0.281h0.312l7.812,0.035l0.192-6.844 c-0.052-0.077-0.321-0.483-0.718-1c-0.217-0.282-0.439-0.58-0.656-0.812c-0.217-0.232-0.441-0.408-0.5-0.438 c-0.432-0.216-0.993-0.595-1.594-0.939s-1.221-0.626-1.562-0.626c-0.675,0-1.662-0.231-2.719-0.501 c-1.057-0.271-2.159-0.578-2.938-0.752c-0.572-0.127-0.996-0.548-1.28-1.001c-0.285-0.453-0.462-0.97-0.593-1.469 c-0.26-0.998-0.311-1.938-0.311-1.938h0.031l-0.903-4.688l-1.03-1.782l-7.719-0.004h-0.029L334.945,88.877L334.945,88.877z" />
    </g>
    <g id="duzce"  onClick={setIlNameOnClick} data-plakakodu="81" data-alankodu="380" data-iladi="Düzce">
    <path
      d="M294.325,81.136l-4.501,1.279h-0.062l-0.031,0.031l-6.312,0.372l-5.376,0.466l0.624,2.156 l0.031,0.125v0.125l-0.658,2.907l-0.031,0.156l-0.094,0.094l-3.158,3.279l-0.031,0.031l-0.031,0.031l-3.157,2.06l-1.314,3.28 l-0.003,5.094l2.406,0.532l0.281,0.062l0.094,0.281l0.998,3.532l0.062,0.25l-0.156,0.188l-2.221,3.03l1.812,0.22h0.062 l11.312-0.119h0.157l0.125,0.062l1.874,1.22h0.062l3.999,1.221l4.376-1.06l1.657-1.874l-0.122-4.875v-0.094l0.062-0.125 c0,0,0.235-0.5,0.501-1.062c0.265-0.562,0.57-1.275,0.595-1.375c0.079-0.316,0.235-0.493,0.438-0.812s0.44-0.68,0.689-1.031 c0.495-0.702,0.97-1.343,0.97-1.343l0.125-0.188l0.219-0.031l3.531-0.498v0.031l4.501-1.029l4.282-1.092l2.813-2.686l0.441-4.938 l-3.188-0.783h-0.062l-3.062-0.502h-0.031l-8.938-0.63h-0.125l-0.125-0.094l-2.905-2.002l-0.031-0.062l-0.062-0.031L294.325,81.136 z" />
    </g>
    <g id="gumushane" onClick={setIlNameOnClick} data-plakakodu="29" data-alankodu="456" data-iladi="Gümüşhane">
    <path
      d="M696.781,104.824l-0.501,1.094l-0.094,0.156l-0.125,0.062l-4.032,2.092l-0.031,0.031 l-0.062,0.031l-3.064,2.748l-4.659,4.997l-0.031,0.062l-0.062,0.031l-3.97,2.56l-2.628,6.093l2.718,1.689h0.031l7.28,2.16 l0.156,0.031l0.094,0.125l1.874,2.595l0.062,0.031l0.031,0.062l3.468,2.564l0.562,0.406l-0.562,0.406l-3.345,2.467l-0.031,0.031 l-3.471,2.936l-2.222,5.624l0.154,4.344l4.81,3.441l0.438,0.312l-0.375,0.438c0,0-0.19,0.215-0.25,0.281 c1.091,0.482,3.513,1.544,4.218,1.846c0.497,0.213,1.366,0.668,2.218,1.126c0.853,0.458,1.717,0.944,1.937,1.032 c0.321,0.128,0.843,0.321,1.375,0.563c0.532,0.241,1.037,0.498,1.375,0.751c0.334,0.251,1.399,0.56,2.468,1.095 c0.995,0.499,2.833,1.339,3.687,1.908c0.822,0.548,2.293,1.689,3.53,1.69c0.91,0.001,1.836,0.397,2.656,0.751 c0.41,0.177,0.795,0.345,1.094,0.47s0.557,0.188,0.531,0.188c0.116,0,0.366-0.126,0.656-0.344c0.29-0.218,0.621-0.492,1-0.718 c0.341-0.204,0.678-0.186,1-0.124c0.322,0.061,0.635,0.17,0.969,0.282c0.667,0.222,1.374,0.449,1.75,0.407 c0.78-0.087,1.382,0.341,1.812,0.72c0.215,0.19,0.419,0.369,0.562,0.5c0.122,0.111,0.191,0.15,0.188,0.156 c0.055-0.018,0.138-0.062,0.25-0.125c0.223-0.126,0.516-0.334,0.812-0.562c0.593-0.456,1.209-1.019,1.501-1.311 c0.252-0.252,0.578-0.41,0.969-0.593c0.391-0.184,0.838-0.37,1.281-0.53c0.886-0.322,1.731-0.58,2.031-0.655 c-0.075,0.019-0.01,0.024,0.062-0.031c0.072-0.055,0.172-0.143,0.281-0.25c0.219-0.214,0.471-0.527,0.719-0.812 c0.345-0.398,0.496-0.58,0.656-0.781l-4.436-2.471c-0.006-0.001-0.054-0.03-0.062-0.031c-0.15-0.024-0.577-0.076-1.156-0.251 c-0.338-0.101-0.669-0.226-0.969-0.407c-0.3-0.18-0.656-0.439-0.656-0.906c0-0.702-0.122-5.156-0.122-5.156v-0.156l0.094-0.156 c0,0,0.471-0.731,1.095-1.593c0.623-0.863,1.389-1.834,2.032-2.405c1.123-0.996,5.618-5.029,5.722-5.122 c0.027-0.051,0.151-0.261,0.281-0.625c0.143-0.401,0.206-0.882,0.157-1.031c-0.216-0.647-1.248-2.876-1.248-2.876l-0.031-0.062 v-0.094c0,0-0.062-0.833-0.124-1.719s-0.124-1.789-0.124-2.125c0-0.064-0.038-0.336-0.062-0.656s-0.031-0.694-0.03-1.094 c0-0.4,0.009-0.811,0.095-1.188c0.085-0.377,0.228-0.756,0.595-1c0.024-0.016,0.411-0.421,0.782-0.906 c0.37-0.485,0.781-1.092,1.189-1.687c0.816-1.192,1.563-2.311,1.563-2.311l0.031-0.062l0.062-0.062l2.282-1.874l0.031-0.062 l0.062-0.031l2.532-1.124l0.156-0.062l0.156,0.031c0,0,2.238,0.49,2.781,0.627c0.236,0.059,0.603,0.08,0.938,0.095l0.314-3.688 l-1-0.439l-0.188-0.094l-0.062-0.188l-1.185-3.191l-1.781-0.907l-0.908,3.688l-0.094,0.312l-0.344,0.062l-2.844,0.342l-0.281,0.031 l-0.188-0.219l-1.468-2.001l-3.999-1.408l-0.687-0.218l0.469-0.562l1.313-1.655l0.001-2.656l-2.469,0.28l-0.658,3.031l-0.908,4.094 l-0.031,0.156l-0.094,0.094l-3.408,3.404l-0.281,0.281l-0.344-0.25l-2.468-1.751l-0.031-0.031l-5.092-2.815h-0.031l-6.404-3.034 h-0.031l-0.031-0.031l-5.154-3.222h-0.031l-0.031-0.031l-3.373-2.846h-0.031L696.781,104.824z" />
    </g>
    <g id="giresun" onClick={setIlNameOnClick}  data-plakakodu="28" data-alankodu="454" data-iladi="Giresun">
    <path
      d="M693.883,89.541l-0.062,0.031l-0.125,0.031l-2.25,0.374h-0.031h-0.031l-7.438,0.371 l-1.657,1.155l-0.062,0.062l-0.094,0.031l-2.781,0.717l-3.971,3.342l-0.125,0.094l-0.125,0.031l-3.031,0.373h-0.094h-0.094 l-2.594-0.626l-1.719,0.937l-2.783,2.81l-0.156,0.156h-0.219l-11.25-0.256h-0.094l-0.125-0.062l-2.718-1.407l-2.188,0.687 l-0.156,0.031l-0.125-0.031l-3.53-1.002h-0.031c-0.028-0.006-1.058-0.256-2.219-0.501l-2.346,4.374L637,106.887l-0.031,0.062 l-1.283,4.28l2.405,2.095l0.156,0.125l0.031,0.188c0,0,0.201,1.286,0.468,2.688c0.133,0.701,0.304,1.428,0.437,2.031 c0.129,0.589,0.255,1.07,0.311,1.219c0.003,0.007-0.007,0.014,0,0.031c0.013,0.008,0.032-0.013,0.062,0 c0.101,0.044,0.269,0.088,0.5,0.125c0.462,0.073,1.118,0.115,1.812,0.126c1.39,0.023,2.92-0.054,3.875,0.158 c0.31,0.069,0.585,0.258,0.75,0.5s0.224,0.508,0.25,0.781c0.053,0.547-0.067,1.122-0.22,1.688 c-0.307,1.131-0.813,2.188-0.813,2.188l-0.062,0.125l0.654,4.219l0.311,2v0.031l1.779,3.376l0.031,0.094l0.031,0.094l0.342,4.281 v0.094v0.094l-1.096,3.749v0.031l-0.031,0.062c0,0-0.229,0.439-0.281,0.875c-0.026,0.218-0.006,0.421,0.062,0.562 c0.068,0.141,0.17,0.244,0.469,0.344c1.576,0.526,6.937,2.16,6.937,2.16h0.031h0.031l4.499,2.002 c0.164-0.202,0.355-0.453,0.812-0.875c0.309-0.286,0.65-0.581,1.031-0.78c0.381-0.2,0.851-0.341,1.312-0.187 c1.071,0.358,3.187,1.096,3.187,1.096l0.156,0.031l0.062,0.094l2.373,2.751l5.905,2.097l5.531,0.722h0.062l0.062,0.031l3.749,1.408 c0.098,0.015,0.515,0.086,1.094,0.126c0.322,0.021,0.651,0.015,0.938,0.001c0.287-0.015,0.542-0.068,0.594-0.094 c0.193-0.097,0.801-0.613,1.282-1.093c0.215-0.215,0.253-0.244,0.406-0.406c0.041-0.044,0.06-0.088,0.094-0.125l-4.529-3.221 l-0.188-0.156l-0.031-0.25l-0.154-4.625l-0.031-0.125l0.062-0.094l2.315-5.874l0.031-0.125l0.094-0.094l3.596-3.029l0.031-0.031 l2.845-2.092l-3.03-2.283l-0.059-0.031l-0.031-0.062l-1.874-2.532l-7.155-2.098l-0.062-0.031l-0.062-0.031l-3.218-1.971 l-0.375-0.219l0.188-0.406l2.848-6.592l0.062-0.156l0.125-0.062l4.032-2.623l4.628-4.997h0.031v-0.031l3.221-2.842l0.062-0.031 l0.031-0.031l3.97-2.092l0.532-1.25l-1.498-3.72l-0.031-0.062v-0.094l-0.558-6.406v-0.031v-0.031L693.883,89.541L693.883,89.541z" />
    </g>
    <g id="karabuk" onClick={setIlNameOnClick}  data-plakakodu="78" data-alankodu="370" data-iladi="Karabük">
    <path
      d="M380.434,52.464c-0.053,0.013-0.144,0.048-0.25,0.094 c-0.212,0.091-0.514,0.246-0.781,0.406s-0.518,0.326-0.719,0.469c-0.1,0.071-0.191,0.14-0.25,0.188s-0.103,0.082-0.062,0.031 c-0.202,0.252-0.293,0.2-0.375,0.219s-0.159,0.022-0.25,0.031c-0.183,0.019-0.391,0.054-0.656,0.062 c-0.53,0.016-1.229,0.002-1.906-0.001s-1.33,0-1.844-0.001c-0.257,0-0.474-0.004-0.625,0c-0.076,0.002-0.154-0.003-0.188,0 c0.005-0.001-0.017,0.024,0.094-0.031l-0.031-0.094l-0.219,0.156l-3.22,2.123l-0.062,0.062l-0.094,0.031l-4.97,1.185l-3.097,5.873 l-0.062,0.125l-0.125,0.062c0,0-1.08,0.668-2.251,1.343c-0.585,0.338-1.169,0.677-1.689,0.937c-0.259,0.13-0.511,0.23-0.719,0.312 c-0.208,0.082-0.348,0.156-0.594,0.156c0.067,0-0.106,0.028-0.281,0.094c-0.175,0.066-0.396,0.159-0.656,0.281 c-0.521,0.244-1.161,0.573-1.781,0.905c-1.241,0.664-2.407,1.343-2.407,1.343l-0.031,0.031h-0.062l-5.376,1.591l-6.69,3.934 l-0.19,3.219l-0.158,3.562v0.125l-0.062,0.094c0,0-0.432,0.753-0.876,1.562c-0.222,0.405-0.445,0.801-0.626,1.156 c-0.171,0.338-0.285,0.64-0.312,0.719c0.021,0.028,0.035,0.221,0.125,0.438c0.12,0.289,0.305,0.659,0.499,1 c0.39,0.682,0.811,1.312,0.811,1.312l-0.469,0.312l6.031,0.003h0.281l0.156,0.25l1.249,2.126l0.031,0.094v0.062l0.903,4.844v0.031 v0.031c0,0,0.052,0.842,0.28,1.719c0.115,0.438,0.269,0.87,0.468,1.188c0.2,0.318,0.425,0.511,0.656,0.562 c0.828,0.184,1.928,0.485,2.969,0.752s2.072,0.47,2.469,0.47c0.73,0,1.413,0.38,2.062,0.751c0.649,0.371,1.249,0.766,1.531,0.907 c0.298,0.149,0.53,0.387,0.781,0.656s0.521,0.577,0.75,0.875v-0.125l1.625-0.155c0.073-0.056,0.377-0.311,0.812-0.656 c0.482-0.382,1.046-0.826,1.189-0.968c0.509-0.509,1.152-0.713,1.562-0.78c0.027-0.015,0.096-0.048,0.156-0.094 c0.12-0.091,0.276-0.227,0.438-0.375c0.323-0.296,0.679-0.642,0.906-0.844c0.298-0.265,0.616-0.34,0.875-0.406 s0.469-0.117,0.531-0.156c0.367-0.229,0.971-0.627,1.595-1.249c0.256-0.256,0.577-0.758,0.813-1.219 c0.118-0.231,0.198-0.446,0.281-0.625s0.142-0.279,0.219-0.406c-0.035,0.058,0.037-0.114,0.094-0.281s0.118-0.371,0.188-0.594 c0.139-0.446,0.281-0.907,0.407-1.188c0.079-0.177,0.171-0.443,0.312-0.719c0.141-0.276,0.323-0.568,0.688-0.75 c0.439-0.22,0.801-0.044,1.062,0.095c0.261,0.138,0.545,0.304,0.5,0.281c0.209,0.104,0.232,0.177,0.344,0.281 s0.218,0.223,0.344,0.344s0.275,0.259,0.375,0.344c0.042,0.035,0.068,0.076,0.094,0.094c0.05,0.017,0.055,0.017,0.031,0 c0.236,0.081,0.569,0.238,0.938,0.407c0.19,0.086,0.385,0.186,0.531,0.25c0.068,0.03,0.044,0.044,0.094,0.062 c0.013,0.005,0.022-0.004,0.031,0c0.044-0.015,0.081-0.031,0.156-0.062c0.177-0.075,0.426-0.2,0.656-0.312 c0.46-0.225,0.906-0.438,0.906-0.438l0.125-0.094l0.125,0.031c0,0,0.374,0.015,0.781,0.031c0.204,0.008,0.422,0.029,0.594,0.031 s0.348-0.037,0.312-0.031c-0.111,0.018,0.081-0.013,0.25-0.094s0.359-0.205,0.562-0.312c0.342-0.18,0.563-0.292,0.656-0.344 l1.001-1.78l0.031-0.031l1.313-2.624l-0.124-1.219c-0.048-0.086-0.338-0.582-0.687-1.188c-0.189-0.328-0.375-0.648-0.531-0.906 c-0.078-0.129-0.136-0.265-0.188-0.344s-0.132-0.132-0.062-0.062c-0.089-0.089-0.128-0.136-0.188-0.219s-0.105-0.195-0.188-0.312 c-0.164-0.236-0.38-0.517-0.594-0.812s-0.432-0.616-0.625-0.844s-0.408-0.391-0.375-0.375c-0.417-0.208-0.92-0.629-1.437-1.095 c-0.259-0.233-0.525-0.482-0.719-0.688c-0.097-0.103-0.178-0.189-0.25-0.281c-0.072-0.092-0.134-0.155-0.188-0.344 c-0.045-0.158-0.025-0.215-0.031-0.344c-0.006-0.129,0.002-0.292,0-0.469c-0.004-0.353-0.006-0.795,0.001-1.219 c0.011-0.847,0.032-1.625,0.032-1.625V75.3v-0.062l1.096-3.343h-0.031l0.313-1.469l0.031-0.156l0.094-0.094 c0,0,0.673-0.656,1.345-1.343c0.335-0.344,0.668-0.697,0.939-0.968c0.135-0.136,0.253-0.255,0.344-0.344 c0.091-0.089,0.108-0.136,0.219-0.219c0.096-0.072,0.146-0.059,0.219-0.094s0.155-0.084,0.25-0.125 c0.19-0.082,0.426-0.189,0.656-0.281c0.23-0.092,0.444-0.177,0.625-0.25s0.366-0.136,0.344-0.125 c-0.008,0.004,0.106-0.07,0.25-0.156s0.328-0.207,0.5-0.312c0.344-0.211,0.688-0.406,0.688-0.406l0.031-0.031l0.062-0.031 l3.032-0.904l0.688-0.906c-0.06-0.056-0.055-0.061-0.125-0.125c-0.247-0.225-0.557-0.491-0.656-0.562 c-0.148-0.106-0.258-0.231-0.438-0.406s-0.399-0.394-0.594-0.594c-0.389-0.4-0.719-0.75-0.719-0.75l-0.062-0.062l-0.062-0.094 l-0.874-2.188v-0.031l-0.026-0.029c0,0-0.746-2.693-0.936-3.501c-0.095-0.404-0.153-0.819-0.249-1.062 c-0.048-0.122-0.093-0.188-0.125-0.219c-0.032-0.031-0.036-0.027-0.094-0.031c-0.33-0.022-0.58-0.181-0.812-0.344 s-0.452-0.341-0.656-0.531s-0.408-0.396-0.562-0.531C380.491,52.505,380.431,52.471,380.434,52.464z" />
    </g>
    <g id="kastamonu" onClick={setIlNameOnClick}  data-plakakodu="37" data-alankodu="366" data-iladi="Kastamonu">
    <path
      d="M401.449,24.913l-3.438,0.467l-0.031,0.031l-5.532,2.497h-0.031l-6.563,2.402 c0,0-1.743,0.678-3.595,1.373c-0.926,0.347-1.897,0.705-2.657,0.968c-0.38,0.132-0.703,0.233-0.969,0.311 c-0.266,0.079-0.394,0.156-0.656,0.156c0.048,0-0.036-0.017-0.125,0s-0.195,0.058-0.344,0.094c-0.297,0.071-0.694,0.158-1.156,0.28 c-0.924,0.246-2.123,0.605-3.282,0.936c-1.181,0.336-1.458,0.405-2.312,0.655l0.904,3.25v0.031l0.031,0.062l2.092,3.813 l0.031,0.031v0.031l1.592,3.751l0.188,0.375l-0.375,0.25l-3.909,2.531l-0.282,2.25l1.28,1.532c0.013-0.001,0.051,0.002,0.062,0 c0.035-0.005,0.062-0.029,0.094-0.031c0.063-0.005,0.134,0.002,0.219,0c0.169-0.004,0.396,0,0.656,0 c0.521,0.001,1.171-0.002,1.844,0.001s1.37,0.017,1.875,0.001c0.253-0.008,0.456-0.048,0.594-0.062c0.052-0.005,0.07,0.004,0.094,0 c0.021-0.017,0.038-0.043,0.062-0.062c0.082-0.065,0.201-0.139,0.312-0.219c0.224-0.159,0.49-0.357,0.781-0.531 c0.291-0.174,0.596-0.348,0.875-0.469c0.14-0.06,0.268-0.092,0.406-0.125s0.291-0.063,0.5,0c0.288,0.086,0.409,0.212,0.594,0.375 s0.402,0.353,0.594,0.531c0.192,0.178,0.369,0.355,0.531,0.469c0.162,0.114,0.308,0.156,0.312,0.156 c0.277,0.018,0.54,0.139,0.719,0.312s0.264,0.392,0.344,0.594c0.16,0.404,0.229,0.833,0.311,1.188 c0.166,0.705,0.923,3.361,0.936,3.407v0.031l0.843,2.062c0.051,0.055,0.307,0.328,0.656,0.688c0.191,0.196,0.394,0.398,0.562,0.562 s0.335,0.306,0.344,0.312c0.213,0.152,0.495,0.392,0.75,0.625s0.469,0.438,0.469,0.438l0.312,0.312l-0.281,0.375l-1.063,1.374 l-0.094,0.125l-0.156,0.031l-3.157,0.998c-0.075,0.047-0.266,0.162-0.562,0.344c-0.174,0.106-0.351,0.223-0.5,0.312 s-0.247,0.139-0.344,0.188c-0.112,0.056-0.222,0.114-0.406,0.188c-0.184,0.074-0.398,0.159-0.625,0.25s-0.45,0.174-0.625,0.25 c-0.088,0.038-0.166,0.069-0.219,0.094s-0.113,0.07-0.062,0.031c0.066-0.049-0.04,0.042-0.125,0.125s-0.18,0.178-0.312,0.312 c-0.266,0.268-0.603,0.626-0.939,0.968c-0.621,0.637-1.138,1.164-1.22,1.249l-0.282,1.344l-0.031,0.031l-1.033,3.249 c0,0,0,0.06,0,0.062c-0.002,0.057-0.021,0.787-0.032,1.594c-0.006,0.419-0.004,0.85-0.001,1.188c0.002,0.169-0.006,0.3,0,0.406 c0.003,0.053-0.002,0.035,0,0.062c0.007,0.007,0.011,0.037,0.031,0.062c0.04,0.052,0.105,0.131,0.188,0.219 c0.166,0.175,0.382,0.406,0.625,0.625c0.487,0.438,1.099,0.91,1.218,0.97c0.3,0.15,0.465,0.362,0.688,0.625 s0.466,0.568,0.688,0.875s0.431,0.611,0.594,0.844c0.081,0.117,0.135,0.209,0.188,0.281c0.053,0.072,0.106,0.138,0.062,0.094 c0.114,0.114,0.126,0.156,0.188,0.25c0.062,0.094,0.138,0.209,0.219,0.344c0.162,0.269,0.372,0.607,0.561,0.938 c0.381,0.662,0.749,1.312,0.749,1.312l0.031,0.094l0.031,0.094l0.093,1.219l7.438,0.504h0.031l4.25,0.002h0.278l0.156,0.25 l1.593,2.689l0.031,0.031v0.062l0.968,2.689l1.031,0.001l2.157-2.655l0.031-0.062l0.062-0.031l3.407-2.342l0.125-0.062h0.156 l15.906,0.165h0.469v0.5l-0.003,4.656v0.062v0.062l-1.064,3.499l-0.03,0.094l-0.691,4.688v0.062l0.155,1.219l8.562,0.161 l3.439-1.56h0.031h0.031l1.594-0.53l0.156-0.062l0.188,0.062l2.375,0.845l6.375-0.528l2.72-1.593l0.158-3.562v-0.062l-0.998-3.126 l-3.498-3.658l-0.125-0.156v-0.188l0.002-3.94v-0.094l0.031-0.094c0,0,0.366-0.805,0.72-1.688c0.176-0.441,0.34-0.895,0.47-1.281 c0.129-0.386,0.219-0.769,0.219-0.781c0-0.246,0.063-0.393,0.156-0.562c0.093-0.169,0.208-0.355,0.344-0.531 c0.272-0.353,0.621-0.712,0.97-1.093s0.705-0.78,0.97-1.093c0.264-0.314,0.417-0.639,0.406-0.594 c0.057-0.23,0.185-0.342,0.312-0.531c0.127-0.189,0.284-0.424,0.469-0.656c0.37-0.465,0.821-0.983,1.282-1.499 c0.923-1.035,1.813-1.999,1.813-1.999l0.125-0.094l0.156-0.031l5.439-0.966v-0.312h0.469l0.626-1.5l-0.81-3.312l-0.031-0.094 l-1.936-4.376l-0.094-0.219l0.094-0.188l1.596-3.561l0.031-0.094l0.094-0.062l3.564-3.56l0.031-0.031l0.032-0.033l3.095-2.217 l1.94-3.749l-2.686-3.345l-4.405-1.033l-3.969,0.873h-0.031h-0.031l-4.281,0.373h-0.219l-0.156-0.125c0,0-0.348-0.299-0.688-0.688 s-0.75-0.82-0.749-1.469c0-0.324,0.124-0.613,0.25-0.938s0.277-0.679,0.439-1c0.288-0.575,0.507-0.965,0.563-1.062l-0.341-5.062 l-1.218-2.625l-0.031-0.094v-0.125l0.001-2.719l-3.5-0.721h-0.031l-5.438-0.878h-0.094l-11.281-0.006h-0.031h-0.031l-6.781-0.879 h-0.031l-5.406-0.378h-0.031l-0.031-0.031l-4.905-1.003L401.449,24.913z" />
    </g>
    <g id="ordu" onClick={setIlNameOnClick}  data-plakakodu="52" data-alankodu="452" data-iladi="Ordu">
    <path
      d="M593.01,84.986l-3.095,2.654l-0.125,0.094l-0.156,0.031l-3.844,0.498l-2.565,5.28v0.062 l-0.062,0.031l-3.377,4.123l-0.125,0.125l-0.188,0.031l-5.219,0.685l-3.751,2.404l-0.125,0.344l0.187,1.312l4.654,3.284 l0.031,0.031l0.031,0.031l3.029,3.221l0.031,0.031l0.031,0.062l1.311,2.095l5.75,0.878h0.094l5.438-0.185h0.125l0.094,0.031 l3.218,1.252l2.499,1.095l0.281,0.094l0.031,0.312c0,0,0.068,0.81,0.343,1.719c0.275,0.909,0.76,1.864,1.343,2.189 c0.981,0.546,1.524,1.562,2.03,2.376c0.253,0.407,0.496,0.773,0.718,1s0.403,0.312,0.594,0.312c0.902,0,2.249,0.407,3.469,0.814 c1.169,0.391,2.076,0.751,2.156,0.782l11,0.194h0.75l-0.312,0.688l-1.627,3.561l-1.283,2.937l2.03,2.72l0.062,0.031l0.031,0.062 l3.654,2.814l2.125-0.437l0.658-3.062l0.156-0.688l0.594,0.375l1.905,1.22l2.969,0.658l4.439-1.998l1.378-5.468l0.062-0.219 l0.219-0.125l3.751-1.779h0.031l0.062-0.031l4.407-0.998c0.086-0.185,0.412-0.912,0.657-1.812c0.137-0.506,0.188-1.02,0.157-1.344 c-0.016-0.162-0.059-0.261-0.094-0.312c-0.035-0.051-0.034-0.073-0.125-0.094c-0.652-0.145-2.265-0.103-3.688-0.127 c-0.711-0.011-1.378-0.037-1.938-0.126c-0.28-0.044-0.522-0.12-0.75-0.219s-0.477-0.238-0.594-0.531 c-0.125-0.311-0.239-0.788-0.374-1.406c-0.136-0.618-0.271-1.357-0.405-2.062c-0.249-1.314-0.44-2.37-0.468-2.531l-2.53-2.22 l-0.25-0.219l0.094-0.312l1.441-4.624v-0.031l0.031-0.031l2.659-5.718l0.031-0.031l2.19-4.093c-0.25-0.049-0.53-0.116-0.75-0.156 c-0.513-0.093-0.953-0.157-1.031-0.157c-0.545,0-1.177-0.217-1.812-0.407c-0.318-0.095-0.627-0.182-0.875-0.25 s-0.467-0.094-0.469-0.094c-0.21,0-0.57-0.046-1.094-0.095c-0.524-0.048-1.149-0.094-1.781-0.157 c-1.264-0.127-2.469-0.251-2.469-0.251l-0.125-0.031l-0.062-0.031l-3.405-1.908l-0.094-0.062l-0.062-0.062l-2.279-2.907 l-0.062-0.094l-0.031-0.125l-0.56-3.094c-0.311-0.09-1.877-0.532-2.875-0.533c-0.959-0.001-1.55,0.725-1.594,0.78 c-0.002,0.002-0.031,0.031-0.031,0.031l-2.877,4.498l-0.062,0.125l-0.156,0.062l-3.282,1.404l-0.25,0.094l-0.219-0.156 l-3.687-2.533h-0.031l-0.031-0.031l-3.154-3.033l-4.094-0.252h-0.126l-0.125-0.094l-2.811-1.94c-0.303,0-3.987-0.002-4.594-0.003 c-0.331,0-0.619-0.119-0.969-0.251L593.01,84.986L593.01,84.986z" />
    </g>
    <g id="rize" onClick={setIlNameOnClick}  data-plakakodu="53" data-alankodu="464" data-iladi="Rize">
    <path
      d="M802.646,65.413l-2.626,1.78l-0.031,0.031l-5.158,4.247l-0.031,0.031l-0.031,0.031 l-6.814,4.152l-0.062,0.062h-0.094l-6.001,1.091l-2.94,3.186l-0.031,0.031h-0.031l-3.814,2.904v0.031h-0.031l-5.94,3.559 l-0.094,0.062h-0.125l-5.094,0.247l-5.189,2.185l-0.031,0.031l-1.845,1.718l2.905,2.408l0.031,0.062l0.062,0.031l2.123,2.876 l0.062,0.062l0.031,0.062l1.903,6.032h0.031l1.404,3.032l0.062,0.094v0.156l-0.378,5.531v0.094l-0.031,0.094l-1.345,2.687 l0.311,2.5v0.062l0.686,3.062l2.405,1.282l3.47-1.342l4.596-3.841l0.062-0.094l0.125-0.031l4.532-1.217l2.658-2.999l0.062-0.094 l2.252-4.343l0.094-0.188l0.188-0.062l6.563-2.465l0.031-0.031l4.251-2.029l2.253-4.655v-0.031l0.69-3.781l0.031-0.125l0.062-0.125 l5.535-6.747l4.659-6.091l0.031-0.031v-0.031l2.532-2.343l-1.78-2.251l-0.062-0.062l-3.124-2.44l-0.059-0.026l-0.062-0.094 l-2.123-3.189l-0.062-0.062v-0.062L802.646,65.413z" />
    </g>
    <g id="samsun" onClick={setIlNameOnClick}  data-plakakodu="55" data-alankodu="362" data-iladi="Samsun">
    <path
      d="M530.251,45.983c-0.191,0.094-1.617,0.82-3.345,1.623c-0.918,0.427-1.857,0.863-2.626,1.187 c-0.384,0.162-0.753,0.276-1.031,0.374c-0.278,0.099-0.405,0.188-0.688,0.188c0.044,0-0.117,0.002-0.281,0.062 s-0.354,0.167-0.594,0.281c-0.481,0.229-1.093,0.53-1.656,0.843c-1.126,0.625-2.157,1.249-2.157,1.249l-0.062,0.062l-0.125,0.031 l-5.781,0.872h-0.094h-0.094l-1.844-0.407l-3.597,5.654l-1.377,3.999l-1.033,3.374l1.903,5.063l0.062,0.188l-0.062,0.188 l-1.971,4.28l-0.062,0.156l-0.156,0.062l-3.907,2.31l-0.125,0.094h-0.156l-5-0.191h-0.281l-0.125-0.219l-2.498-3.939v-0.031h-0.031 l-2.685-5.063l-2.156,0.28h-0.031L481.24,71.3l-1.346,3.905l-0.031,0.094l-0.062,0.062l-1.97,2.655l-0.031,0.062l-0.031,0.031 l-1.47,1.311l2.187,2.063l0.125,0.094l0.031,0.125l0.686,2.719l4.404,3.346l5.156,0.347l0.188,0.031l0.125,0.125l4.186,4.002 l2.688,0.313l4.845-1.059h0.031h0.031c0,0,1.253-0.097,2.594-0.187c1.341-0.089,2.716-0.155,3.156-0.154 c0.408,0,0.678,0.228,0.875,0.469c0.197,0.241,0.347,0.513,0.469,0.781c0.244,0.537,0.374,1.062,0.374,1.062l0.062,0.156 l-0.062,0.156l-0.907,2.25l2.718,1.189l3.438,0.002h0.25l0.156,0.219l1.998,2.845l8.5,0.693h0.062l0.062,0.031l7.249,2.285 l4.906,0.691l4.44-4.217l1.564-2.968l1.44-2.874l0.25-0.531l0.5,0.375c0,0,0.418,0.348,0.969,0.689 c0.551,0.34,1.249,0.626,1.562,0.626c0.675,0,2.025,0.245,3.281,0.471s2.375,0.439,2.375,0.439l0.875,0.188l-0.625,0.656 l-2.282,2.405l2.561,1.751h0.031l2,0.501l4.876-1.185l5.313-1.435h0.031c0.028-0.011,0.894-0.365,1.844-0.53 c0.482-0.084,0.968-0.128,1.438,0.001c0.235,0.065,0.477,0.196,0.656,0.406s0.281,0.488,0.281,0.781c0,0.332,0,0.173,0,0.406 l3.501-2.248l0.094-0.062l0.125-0.031l5.125-0.653l3.252-3.873l0.062-0.094l2.597-5.437l0.125-0.25l0.281-0.031l3.969-0.498 l2.595-2.249c-0.041-0.018-0.085-0.013-0.125-0.031c-0.752-0.338-1.382-0.661-1.438-0.689c-0.002-0.001-0.062-0.031-0.062-0.031 l-3.343-1.221l-0.281-0.125l-0.031-0.281l-0.748-4l-3.907-3.655l-3.904-3.44l-6.812-0.879h-0.062h-0.031l-3.061-1.158l-3.784,4.717 l-0.065,0.062l-2.596,4.249l-0.156,0.219h-0.281l-6.812,0.121h-0.219l-0.156-0.156l-1.405-1.657l-2.936-3.283l-2.78-1.002 l-0.156-0.031l-0.094-0.156l-0.874-1.375l-2.779-4.033l-2.687-2.439l-0.156-0.125v-0.188l-0.529-4.562v-0.031l-0.247-5.844 l-1.779-2.845l-0.031-0.031l-2.623-3.47l-3.219-0.596l-0.062-0.031h-0.031L530.251,45.983z" />
    </g>
    <g id="sinop" onClick={setIlNameOnClick}  data-plakakodu="57" data-alankodu="368" data-iladi="Sinop">
    <path
      d="M482.764,21.3l-0.969,0.718l-1.064,2.874l-0.031,0.094l-0.094,0.094l-3.283,3.154 l-0.062,0.062l-0.094,0.031l-5.282,2.278l-0.094,0.031h-0.062c0,0-1.297,0.123-2.656,0.249c-0.679,0.063-1.379,0.108-1.938,0.155 s-0.947,0.093-1.156,0.093c-0.251,0-0.596-0.054-1.156-0.126c-0.56-0.071-1.258-0.156-1.938-0.251 c-1.359-0.191-2.656-0.376-2.656-0.376l-0.031-0.031h-0.031l-2.812-0.846l-5.532,0.997h-0.062h-0.062l-4.812-0.378h-0.031 l-0.031-0.031l-0.281-0.062l-0.001,2.406l1.187,2.563l0.062,0.094v0.094l0.341,5.344l0.031,0.156l-0.099,0.125 c0,0-0.29,0.548-0.595,1.156c-0.152,0.304-0.329,0.628-0.438,0.906c-0.109,0.278-0.156,0.53-0.156,0.562 c0,0.065,0.215,0.486,0.5,0.812c0.21,0.24,0.34,0.35,0.438,0.438l4.062-0.342l4.031-0.873l0.125-0.031l0.094,0.031l4.655,1.097 l0.156,0.031l0.126,0.127l3.029,3.752l0.219,0.25l-0.156,0.312l-2.158,4.093l-0.062,0.094l-0.094,0.094l-3.189,2.31l-3.44,3.373 l-0.031,0.062l-1.471,3.311l1.873,4.251v0.031l0.031,0.031l0.873,3.594l0.062,0.156l-0.062,0.156l-0.532,1.25l6.5,0.004h0.125 l0.094,0.062l4.28,2.346h0.031l4.218,2.658l0.062,0.031l4.281,1.817l1.501-1.343l0.062-0.062l1.813-2.468l1.44-4.124l0.062-0.188 l0.188-0.094l5.533-2.841l0.062-0.031l0.094-0.031l2.688-0.343l0.344-0.031l0.156,0.281l2.841,5.346l0.031,0.031l2.342,3.657 l4.562,0.19l3.689-2.186l1.814-3.968l-1.903-4.97l-0.062-0.156l0.062-0.156l1.064-3.561v-0.031l1.44-4.093l0.031-0.062l0.031-0.062 l3.409-5.342l-1.812-0.407l-0.156-0.031l-0.094-0.094l-1.811-1.939l-4.28-1.596l-3.812-1.283l-0.156-0.031l-0.094-0.156 l-1.718-2.563l-2.28-1.313l-0.219-0.156l-0.031-0.25l-0.124-1.969l-2.529-2.782l-0.125-0.156V37.18l0.095-1.312l-2.124-2.501 l-0.125-0.125v-0.221l0.127-3.906l0.031-0.094l0.031-0.094l1.001-2.311c-0.129-0.124-0.242-0.22-0.531-0.469 c-0.426-0.365-0.983-0.776-1.188-0.845c-0.367-0.122-0.603-0.365-0.906-0.656s-0.616-0.63-0.905-0.969 c-0.542-0.633-0.941-1.143-0.999-1.22L482.764,21.3z" />
    </g>
    <g id="trabzon" onClick={setIlNameOnClick}  data-plakakodu="61" data-alankodu="462" data-iladi="Trabzon">
    <path
      d="M709.853,85.363l-4.626,2.403l-0.031,0.031l-3.907,1.748l-0.25,0.125l-0.219-0.125 l-3.874-2.252l-2.22,1.624h0.156l-0.003,4.781v0.031l0.559,6.406l1.56,3.782l0.062,0.156l0.125-0.188l3.749,2.658v0.031h0.031 l3.31,2.814l0.062,0.031l5.092,3.159l0.031,0.031l6.373,3.003h0.031v0.031l5.186,2.847l0.031,0.031l2.155,1.532l3.002-2.998 l0.877-3.938l0.69-3.406l0.094-0.344l0.344-0.031l3.406-0.373l0.562-0.031v0.531l-0.002,3.406v0.156l-0.125,0.156l-1.001,1.218 l3.468,1.221l0.125,0.031l0.094,0.125l1.437,1.907l2.25-0.28l0.971-3.937l0.156-0.625l0.562,0.281l2.499,1.251l0.156,0.094 l0.094,0.188l1.186,3.22l4.874,2.191l0.094,0.031l5.249,1.378h0.031l7.657-1.246l1.438-0.687l-0.592-2.812h-0.031v-0.031 l-0.343-2.688l-0.031-0.156l0.062-0.125l1.377-2.718l0.378-5.344l-1.373-2.939l-0.031-0.031v-0.031l-1.903-5.907l-0.031-0.031 l-2.03-2.751l-2.968-2.502l-0.188,0.156l-3.314,3.154l-0.062,0.094l-0.123,0.036c0,0-1.019,0.323-2.094,0.655 s-2.14,0.636-2.469,0.718c-0.259,0.065-0.491,0.069-0.812,0.062s-0.71-0.038-1.062-0.063c-0.704-0.048-1.344-0.095-1.344-0.095 l-0.156-0.031l-0.094-0.094l-2.905-2.408l-2.562-0.251l-2.906,0.873h-0.094h-0.094l-4.156-0.252h-0.156l-0.125-0.094l-2.03-1.689 h-0.031l-4.311-1.721l-2.063,1.061l-0.031,0.031h-0.062l-1.906,0.499l-0.188,0.062l-0.188-0.094l-1.999-1.157h-0.031v-0.029 l-2.905-2.002l-0.031-0.031l-0.031-0.031l-2.374-2.282h-0.031L709.853,85.363z" />
    </g>
    <g id="zonguldak"  onClick={setIlNameOnClick}  data-plakakodu="67" data-alankodu="372" data-iladi="Zonguldak">
    <path
      d="M335.122,51.877l-2.407,1.124l-9.033,4.245l-0.062,0.031l-9.034,5.901l-0.062,0.031 l-0.062,0.031l-7.876,1.996l-4.564,3.342l-0.972,5.499l-0.031,0.094l-0.062,0.094l-2.411,3.405l-0.031,0.062l-0.031,0.031 l-3.252,2.904l3.092,3.502l2.749,1.94l8.844,0.63h0.031h0.031l3.156,0.533h0.031l3.656,0.877l0.438,0.094l-0.063,0.438 l-0.095,1.125c0.466-0.155,0.883-0.323,1.438-0.468c0.856-0.225,1.625-0.405,1.625-0.405h0.062h0.062l11.031,0.006h0.031 l3.439-1.06h0.062h0.094l1.469,0.001c-0.117-0.175-0.349-0.533-0.687-1.125c-0.207-0.362-0.415-0.738-0.561-1.094 c-0.147-0.356-0.314-0.652-0.187-1.094c0.074-0.258,0.218-0.534,0.406-0.906c0.188-0.372,0.431-0.809,0.657-1.219 c0.421-0.769,0.765-1.384,0.813-1.469l0.158-3.438l0.19-3.469l0.031-0.281l0.219-0.125l6.596-3.902l-0.718-1.812l-0.031-0.094 l-0.031-0.094l-0.06-3.031l-0.031-0.125l0.062-0.094l0.782-1.594l-2.154-2.813l-0.062-0.062v-0.094l-0.718-2.312l-0.03-0.063 v-0.031l-0.248-2.844l-5.78-2.565L335.122,51.877z" />
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

export default Karadeniz
