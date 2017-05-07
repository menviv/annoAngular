import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  ngOnInit() {

       var Execute = localStorage.getItem("Execute");
              
       if (Execute == 'true') {
       
       		localStorage.removeItem("Execute");
                 
       		location.reload();
       
       } else {
       
       		localStorage.clear();
       
       		this.initFormData();
       
       }

  };


  getParameterByName(name) {
       var url = window.location.href;
       name = name.replace(/[\[\]]/g, "\\$&");
       var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
       if (!results) return null;
       if (!results[2]) return '';
       return decodeURIComponent(results[2].replace(/\+/g, " "));
  };  


    
  initFormData() {
    
          var getUrlParameterAnnoEmp = this.getParameterByName('AnnoEmp');

          var getUrlParameterHideCreditCardUserId = this.getParameterByName('HideCreditCardUserId');
          $( "#HideCreditCardUserId" ).val( getUrlParameterHideCreditCardUserId ); 
          var getUrlParameterHideCVV = this.getParameterByName('HideCVV');
          $( "#HideCVV" ).val( getUrlParameterHideCVV ); 

          if (getUrlParameterHideCVV != null) {
              localStorage.setItem("specialRequest","true");
              $("#cmdPayNow").fadeIn(100); 
          } else {
              localStorage.removeItem("specialRequest");
          }


          if (getUrlParameterAnnoEmp == null) {

            $( "#AnnoEmp" ).val('Donar');

          } else {

            $( "#AnnoEmp" ).val(getUrlParameterAnnoEmp);

          }

            var packageType = $( "#package" ).val();
            $( "#SumToBill" ).val( packageType ); 

            var currentProject = $( "#Project" ).val();
            $( "#ProductName" ).val(currentProject);    
    
    };





/////// Runtime client //////////


    CauseSection_changed() {
    
        var currentProject = $( "#Project" ).val();
        
        $( "#ProductName" ).val(currentProject);
        
        console.log("currentProject: ", currentProject);
                
        if ( currentProject == "קידום חקיקה להגנת בעלי-חיים" ) {
        
        	$( "#cause1" ).fadeIn( "slow" ); 
          $( "#cause2" ).fadeOut( "fast" ); 
          $( "#cause3" ).fadeOut( "fast" ); 
          $( "#cause4" ).fadeOut( "fast" ); 
          $( "#cause5" ).fadeOut( "fast" ); 
        
        } else if ( currentProject == "קירות סמויות במשקים תעשייתיים" ) {
        
        	$( "#cause1" ).fadeOut( "fast" ); 
          $( "#cause2" ).fadeIn( "slow" ); 
          $( "#cause3" ).fadeOut( "fast" ); 
          $( "#cause4" ).fadeOut( "fast" ); 
          $( "#cause5" ).fadeOut( "fast" ); 
        
        } else if ( currentProject == "הצלת תרנגולות מהשמדה" ) {
        
        	
        	$( "#cause1" ).fadeOut( "fast" ); 
          $( "#cause2" ).fadeOut( "fast" ); 
          $( "#cause3" ).fadeIn( "slow" );  
          $( "#cause4" ).fadeOut( "fast" ); 
          $( "#cause5" ).fadeOut( "fast" );           
        
        } else if ( currentProject == "הרצאות לנוער חיילים ומבוגרים" ) {
        
        	$( "#cause1" ).fadeOut( "fast" ); 
          $( "#cause2" ).fadeOut( "fast" ); 
          $( "#cause3" ).fadeOut( "fast" ); 
          $( "#cause4" ).fadeIn( "slow" );  
          $( "#cause5" ).fadeOut( "fast" ); 
        
        } else if ( currentProject == "אתגר 22+ למעבר לתזונה טבעונית" ) {

        	$( "#cause1" ).fadeOut( "fast" ); 
          $( "#cause2" ).fadeOut( "fast" ); 
          $( "#cause3" ).fadeOut( "fast" ); 
          $( "#cause4" ).fadeOut( "fast" );  
        	$( "#cause5" ).fadeIn( "slow" ); 
        
        } else if ( currentProject == "כללי" ) {

        	$( "#cause1" ).fadeOut( "fast" ); 
          $( "#cause2" ).fadeOut( "fast" ); 
          $( "#cause3" ).fadeOut( "fast" ); 
          $( "#cause4" ).fadeOut( "fast" );  
        	$( "#cause5" ).fadeOut( "fast" ); 
        
        }
    
    };
    



    Donation_Type_id_changed() {
    
	    var DonationType = $( "#Donation_Type_id" ).val(); 
     
    	if (DonationType == "2") {
      
        $( "#numPayments" ).fadeIn( "slow" ); 
        $( "#numPaymentsLabel" ).fadeIn( "slow" ); 

        $( "#DateToCharge" ).fadeOut( "slow" ); 
        $( "#DateToChargeLabel" ).fadeOut( "slow" );         

      } else if (DonationType == "1") {

        $( "#DateToCharge" ).fadeIn( "slow" ); 
        $( "#DateToChargeLabel" ).fadeIn( "slow" );     
 
        $( "#numPayments" ).fadeOut( "slow" ); 
        $( "#numPaymentsLabel" ).fadeOut( "slow" ); 
        
      } else {
      
        $( "#numPayments" ).fadeOut( "slow" ); 
        $( "#numPaymentsLabel" ).fadeOut( "slow" );
        
        $( "#DateToCharge" ).fadeOut( "slow" ); 
        $( "#DateToChargeLabel" ).fadeOut( "slow" );        
        
      }
  
    };
    
    
    
    
     Package_changed() {
    
	    var packageType = $( "#package" ).val(); 
     
        if (packageType == "0") {

          $( "#AmountObj" ).fadeIn( "slow" );
          
          $( "#SumToBill" ).val( "" ); 

        } else {

          $( "#AmountObj" ).fadeOut( "slow" ); 
          
          $( "#SumToBill" ).val( packageType ); 

        }
  
    };  


    
   AmountObj_changed() {
    
	      var AmountObj = $( "#AmountObj" ).val(); 
        
        $( "#SumToBill" ).val( AmountObj );
  
    }; 
 
 
   SFDCcmd_click() {

          this.EvalDonaId();
          
          this.EvalDonaEmail()
  
    }; 


    EvalDonaId() {
          
            var specialRequest = localStorage.getItem("specialRequest");
            
            if (specialRequest == 'true') {
            
                          $( "#donarid" ).val("");
            
                          localStorage.setItem("IDstatus","true");
                             
            
            } else {
                  
                    var donarid = $( "#donarid" ).val();
                    
                    if (donarid.length > 8) {
                    
                        var URL = "http://nodapipub.azurewebsites.net/public/ValidateID/" + donarid;

                        $.get( URL, function( data ) {
                        
                          localStorage.setItem("IDstatus",data);
                                                    
                        });
                    
                    } else {
                    
                          localStorage.setItem("IDstatus","false");
                          
                          this.Execute();
                    
                    }
                    
            }

    }


    EvalDonaEmail() {
                  
                    var Email = $( "#Email" ).val();
                    
                    if (Email.length > 5) {
                                
                        var URL = "http://nodapipub.azurewebsites.net/public/ValidateEmail/" + Email;

                        $.get( URL, function( data ) {
                        
                          localStorage.setItem("emailstatus",data);
                                            
                          this.Execute();
                          
                        });
                    
                    } else {
                    
                          localStorage.setItem("emailstatus","false");
                          
                          this.Execute();
                    
                    }

    };  



    Execute() {

              var IDstatus = localStorage.getItem("IDstatus");

              var emailstatus = localStorage.getItem("emailstatus");
              
              var currentProject = $( "#Project" ).val();
              $( "#ProductName" ).val(currentProject);       
              
              this.DefineDonationAmout();


                  if (IDstatus == 'true' && emailstatus == 'true') {

                  console.log("both True");

                  $("#IDNumStatus").fadeOut(100);

                  $("#emailStatus").fadeOut(100);

                  $( "#cmdPayNow" ).css('opacity', '0'); 

                  $( "#cmdPayNowPleaseWait" ).fadeIn( "slow" );
                  
                  $( "#shadingLayer" ).fadeIn( "slow" );

                  var donarID = $( "#donarid" ).val(); 

                  $( "#cardOwnerID" ).val(donarID);

                  var DonationTytpeInput = $( "#Donation_Type_id" ).val(); 

                  var DonationTypeTxt = $("#Donation_Type_id option:selected").text();

                  $( "#DonationType" ).val(DonationTypeTxt);

                      $.ajax({
                          url: 'http://nodapipub.azurewebsites.net/anno/QueryAnnoSFDC/',
                          type: 'post',
                          dataType: 'json',
                          data: $('#Donation').serialize(),
                          success: function(data) {
                              console.log(data);
                              localStorage.setItem("Execute","true");
                              $(location).attr('href',data);

                          }
                      });


                } else if (emailstatus == null && IDstatus == null) {

                    $("#emailStatus").fadeIn(100);

                    $("#IDNumStatus").fadeIn(100); 

                } else if (emailstatus == null && IDstatus == 'false') {

                    $("#emailStatus").fadeIn(100);

                    $("#IDNumStatus").fadeIn(100); 

                } else if (emailstatus == null && IDstatus == 'true') {

                    $("#emailStatus").fadeIn(100);

                    $("#IDNumStatus").fadeOut(100); 

                } else if (emailstatus == 'true' && IDstatus == null) {

                    $("#emailStatus").fadeOut(100);

                    $("#IDNumStatus").fadeIn(100); 

                } else if (emailstatus == 'true' && IDstatus == 'false') {

                    $("#emailStatus").fadeOut(100);

                    $("#IDNumStatus").fadeIn(100); 

                } else if (emailstatus == 'false' && IDstatus == 'false') {

                    $("#emailStatus").fadeIn(100);

                    $("#IDNumStatus").fadeIn(100); 

                }
          
          
    }



          DefineDonationAmout() {

              var packageType = $( "#package" ).val(); 
            
                if (packageType == "0") {
                
                  var AmountObj = $( "#AmountObj" ).val(); 
                  
                  $( "#SumToBill" ).val( AmountObj ); 

                } else {
                  
                  $( "#SumToBill" ).val( packageType ); 

                }
          
          }



        




}