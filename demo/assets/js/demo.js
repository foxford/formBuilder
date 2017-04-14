jQuery(function($) {
  const fbOptions = {
    subtypes: {
      text: ['datetime-local']
    },
    onSave: function(e, formData) {
      toggleEdit();
      $('.render-wrap').formRender({formData});
      window.sessionStorage.setItem('formData', JSON.stringify(formData));
    },
    stickyControls: {
      enable: true
    },
    // i18n: {
      // locale: 'es-ES',
      // langs: [
      // 'es-ES',
      // 'en-US',
      // ]
    // },
  };
  let formData = window.sessionStorage.getItem('formData');
  let editing = true;

  if (formData) {
    fbOptions.formData = JSON.parse(formData);
  }

  /**
   * Toggles the edit mode for the demo
   * @return {Boolean} editMode
   */
  function toggleEdit() {
    document.body.classList.toggle('form-rendered', editing);
    return editing = !editing;
  }

  const setFormData = '[{"type":"text","label":"Full Name","subtype":"text","className":"form-control","name":"text-1476748004559"},{"type":"select","label":"Occupation","className":"form-control","name":"select-1476748006618","values":[{"label":"Street Sweeper","value":"option-1","selected":true},{"label":"Moth Man","value":"option-2"},{"label":"Chemist","value":"option-3"}]},{"type":"textarea","label":"Short Bio","rows":"5","className":"form-control","name":"textarea-1476748007461"}]';

  const fbPromise = $('.build-wrap').formBuilder(fbOptions).promise;

  fbPromise.then(function(fb) {
    console.log(fb);
    let apiBtns = {
      showData: fb.actions.showData,
      clearFields: fb.actions.clearFields,
      getData: () => console.log(fb.actions.getData()),
      setData: () => fb.actions.setData(setFormData),
      addField: () => {
        let field = {
            type: 'text',
            class: 'form-control',
            label: 'Text Field added at: ' + new Date().getTime()
          };
        fb.actions.addField(field);
      },
      removeField: () => fb.actions.removeField()
    };

    Object.keys(apiBtns).forEach(action => {
      document.getElementById(action)
      .addEventListener('click', e => apiBtns[action]());
    });

    document.getElementById('setLanguage')
    .addEventListener('change', e => fb.actions.setLang(e.target.value));
  });


  document.getElementById('edit-form').onclick = function() {
    toggleEdit();
  };
});
