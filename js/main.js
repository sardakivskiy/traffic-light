const btnNode = document.querySelector('.js-button');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

btnNode.addEventListener('click', function() {
    switchLight(trafficLightNode);
});