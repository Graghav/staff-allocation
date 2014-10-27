$(function(){

  var staffs;

  $.get('/api/staff', function(data){
      staffs = JSON.parse(data)
      console.log(staffs)
      initTypeahead();
  })

  function initTypeahead() {
    var staff = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    local: $.map(staffs, function(_staff) { return _staff  })
  });
   
  staff.initialize();
   
  $('.typeahead').typeahead(null, {
    name: 'staff',
    displayKey: 'name',
    source: staff.ttAdapter(),
    templates: {
      empty: [
        '<div class="empty-message">',
        'Unable to find staff information',
        '</div>'
      ].join('\n'),
      suggestion: Handlebars.compile('<p>{{name}} – {{dept}}</p>')
    }
  }).on('typeahead:selected', staffSelected);
  }


  function staffSelected(event, data, st) {
    console.log(data)
    if(data.designation) $("#staff_designation").val(data.designation).attr('disabled','');
    if(data.id_no) $("#staff_id_no").val(data.id_no).attr('disabled','');
    if(data.dept) $("#staff_department").val(data.dept).attr('disabled','');

  }

  $(".typeahead").keyup(function(){
    $("input").removeAttr('disabled');
  })

})