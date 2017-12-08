$(document).ready(function(){
   
   /* -------------- Feedback -------------- */
   /* Yes click */
   $('.feedback-yes').click(function() {
      /* fade out question, fade in thankyou message */
      $('.feedback-question').fadeOut(function() {
         $('.feedback-reason.yes-thanks').fadeIn();
      });
               
      ga('send', 'event', 'Feedback - Yes', 'N/A', location.href);

   });

   /* No click */
   $('.feedback-no').click(function() {
      /* fade out question, fade in thankyou message */
      $('.feedback-question').fadeOut(function() {
         $('.feedback-reason.no').fadeIn();
      });
   });
      
   /* No - response reasons */
   $('.feedback-reason .option').change(function() {
      /* if any options change, disable checkbox, record event, and fade in thankyou and email link */
      $(this).attr('disabled', true);
         if ($(this).is(':checked')) {
            var reason = $(this).attr('data-analytics-label');
            ga('send', 'event', 'Feedback - No', reason, location.href);
         }
      $('.feedback-reason.no-thanks').fadeIn();
   });
   
			
		/* ----- record SearchResult event for page views from a search ------ */		
		/* If current page has a ?Highlight=xxx parameter, then record it as a search result event */
		if (location.search.indexOf('?Highlight=') > -1) {
			/* highlightterm = location.search.split("Highlight=")[1]; */
			ga('send', 'event', 'Search', 'SearchResult', location.href);
			/* console.log("search highlight: " + location.href); */
		}
					
		
		
});   