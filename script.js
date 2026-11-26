const guidance = {
  urgent: {
    title: 'Acude a urgencias ahora',
    text: 'Este síntoma requiere atención hospitalaria inmediata. Te sugerimos acudir a urgencias.',
    alert: true
  },
  soon: {
    title: 'Conviene que el doctor te valore pronto',
    text: 'Escríbenos para agendar tu lugar. Si el malestar es muy intenso o empeora, acude a urgencias.',
    alert: false
  },
  mild: {
    title: 'Lo vemos en consulta general',
    text: 'Ven en horario de atención, con o sin cita, y acude con cubrebocas desde tu llegada.',
    alert: false
  },
  quick: {
    title: 'Puedes acudir sin cita',
    text: 'Ven directamente en horario de atención, de lunes a viernes.',
    alert: false
  }
};

const symptomButtons = document.querySelectorAll('.symptom-option');
const responsePanel = document.querySelector('#symptom-response');

function selectSymptom(button) {
  symptomButtons.forEach((option) => {
    option.setAttribute('aria-pressed', String(option === button));
  });

  const response = guidance[button.dataset.symptom];
  responsePanel.classList.toggle('is-alert', response.alert);
  responsePanel.innerHTML = `<h3>${response.title}</h3><p>${response.text}</p>`;
}

symptomButtons.forEach((button) => {
  button.addEventListener('click', () => selectSymptom(button));
});
