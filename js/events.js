$(document).ready(function() {

    var $CalendarData = $("#btx_events_calendar_data");
    var $RecurrenceDetailArea = $("#recurrence_detail_area");
    var $RecurrenceEndArea = $("#recurrence_end_area");
    var $RecurrenceType = $("#field_recurrence_type");
    var $SearchResults = $("#btx_events_search_results");

    // Search
    $("#btx_events_search").submit(function(ev) {
        ev.preventDefault();
        $SearchResults.html('<img src="admin_root/images/spinner.gif" alt="" /> Querying Events...').parent().show();
        $SearchResults.load("admin_root/*/com.fastspot.events/ajax/search/", $(this).serializeJSON())
    });

    // Calendar
    $CalendarData.on("click", ".month_button", function(ev) {
        ev.preventDefault();
        $CalendarData.load("admin_root/*/com.fastspot.events/ajax/month/?module_root=" + escape(BTXEventsModuleRoot) + "&month=" + $(this).attr("href").substr(1));
    });

    // Events Forms
    $RecurrenceType.change(updateRecurrenceType);
    if ($RecurrenceType.length) {
        updateRecurrenceType("", "", $RecurrenceDetailArea.find("input").val());
    }

    $("#field_all_day").change(function() {
        if ($(this).attr("checked")) {
            $("#field_start_time").attr("disabled", "disabled");
            $("#field_end_time").attr("disabled", "disabled");
        } else {
            $("#field_start_time").removeAttr("disabled");
            $("#field_end_time").removeAttr("disabled");
        }
    });

    function updateRecurrenceType(ev, element, existing_val) {
        var val = $RecurrenceType.val();
        if (!val) {
            $RecurrenceDetailArea.hide();
            $RecurrenceEndArea.hide();
        } else {
            if (val == "daily") {
                $RecurrenceDetailArea.hide();
            } else if (val == "weekly") {
                $RecurrenceDetailArea.html('<label>On</label><select name="recurrence_detail" id="recurrence_dd"><option value="0">Sunday</option><option value="1">Monday</option><option value="2">Tuesday</option><option value="3">Wednesday</option><option value="4">Thursday</option><option value="5">Friday</option><option value="6">Saturday</option></select>').show();
            } else if (val == "monthly") {
                $RecurrenceDetailArea.html('<label>On</label><select name="recurrence_detail" id="recurrence_dd"><option value="1">The 1st day of the month</option><option value="2">The 2nd day of the month</option><option value="3">The 3rd day of the month</option><option value="4">The 4th day of the month</option><option value="5">The 5th day of the month</option><option value="6">The 6th day of the month</option><option value="7">The 7th day of the month</option><option value="8">The 8th day of the month</option><option value="9">The 9th day of the month</option><option value="10">The 10th day of the month</option><option value="11">The 11th day of the month</option><option value="12">The 12th day of the month</option><option value="13">The 13th day of the month</option><option value="14">The 14th day of the month</option><option value="15">The 15th day of the month</option><option value="16">The 16th day of the month</option><option value="17">The 17th day of the month</option><option value="18">The 18th day of the month</option><option value="19">The 19th day of the month</option><option value="20">The 20th day of the month</option><option value="21">The 21st day of the month</option><option value="22">The 22nd day of the month</option><option value="23">The 23rd day of the month</option><option value="24">The 24th day of the month</option><option value="25">The 25th day of the month</option><option value="26">The 26th day of the month</option><option value="27">The 27th day of the month</option><option value="28">The 28th day of the month</option><option value="29">The 29th day of the month</option><option value="30">The 30th day of the month</option><option value="31">The 31st day of the month</option><option value="day#1#0">The 1st Sunday of the month</option><option value="day#1#1">The 1st Monday of the month</option><option value="day#1#2">The 1st Tuesday of the month</option><option value="day#1#3">The 1st Wednesday of the month</option><option value="day#1#4">The 1st Thursday of the month</option><option value="day#1#5">The 1st Friday of the month</option><option value="day#1#6">The 1st Saturday of the month</option><option value="day#2#0">The 2nd Sunday of the month</option><option value="day#2#1">The 2nd Monday of the month</option><option value="day#2#2">The 2nd Tuesday of the month</option><option value="day#2#3">The 2nd Wednesday of the month</option><option value="day#2#4">The 2nd Thursday of the month</option><option value="day#2#5">The 2nd Friday of the month</option><option value="day#2#6">The 2nd Saturday of the month</option><option value="day#3#0">The 3rd Sunday of the month</option><option value="day#3#1">The 3rd Monday of the month</option><option value="day#3#2">The 3rd Tuesday of the month</option><option value="day#3#3">The 3rd Wednesday of the month</option><option value="day#3#4">The 3rd Thursday of the month</option><option value="day#3#5">The 3rd Friday of the month</option><option value="day#3#6">The 3rd Saturday of the month</option><option value="day#4#0">The 4th Sunday of the month</option><option value="day#4#1">The 4th Monday of the month</option><option value="day#4#2">The 4th Tuesday of the month</option><option value="day#4#3">The 4th Wednesday of the month</option><option value="day#4#4">The 4th Thursday of the month</option><option value="day#4#5">The 4th Friday of the month</option><option value="day#4#6">The 4th Saturday of the month</option></select>').show();
            } else if (val == "yearly") {
                $RecurrenceDetailArea.html('<label>On</label><select name="recurrence_detail" id="recurrence_dd"><option value="01-01">January 1st</option><option value="01-02">January 2nd</option><option value="01-03">January 3rd</option><option value="01-04">January 4th</option><option value="01-05">January 5th</option><option value="01-06">January 6th</option><option value="01-07">January 7th</option><option value="01-08">January 8th</option><option value="01-09">January 9th</option><option value="01-10">January 10th</option><option value="01-11">January 11th</option><option value="01-12">January 12th</option><option value="01-13">January 13th</option><option value="01-14">January 14th</option><option value="01-15">January 15th</option><option value="01-16">January 16th</option><option value="01-17">January 17th</option><option value="01-18">January 18th</option><option value="01-19">January 19th</option><option value="01-20">January 20th</option><option value="01-21">January 21st</option><option value="01-22">January 22nd</option><option value="01-23">January 23rd</option><option value="01-24">January 24th</option><option value="01-25">January 25th</option><option value="01-26">January 26th</option><option value="01-27">January 27th</option><option value="01-28">January 28th</option><option value="01-29">January 29th</option><option value="01-30">January 30th</option><option value="01-31">January 31st</option><option value="02-01">February 1st</option><option value="02-02">February 2nd</option><option value="02-03">February 3rd</option><option value="02-04">February 4th</option><option value="02-05">February 5th</option><option value="02-06">February 6th</option><option value="02-07">February 7th</option><option value="02-08">February 8th</option><option value="02-09">February 9th</option><option value="02-10">February 10th</option><option value="02-11">February 11th</option><option value="02-12">February 12th</option><option value="02-13">February 13th</option><option value="02-14">February 14th</option><option value="02-15">February 15th</option><option value="02-16">February 16th</option><option value="02-17">February 17th</option><option value="02-18">February 18th</option><option value="02-19">February 19th</option><option value="02-20">February 20th</option><option value="02-21">February 21st</option><option value="02-22">February 22nd</option><option value="02-23">February 23rd</option><option value="02-24">February 24th</option><option value="02-25">February 25th</option><option value="02-26">February 26th</option><option value="02-27">February 27th</option><option value="02-28">February 28th</option><option value="02-29">February 29th</option><option value="03-01">March 1st</option><option value="03-02">March 2nd</option><option value="03-03">March 3rd</option><option value="03-04">March 4th</option><option value="03-05">March 5th</option><option value="03-06">March 6th</option><option value="03-07">March 7th</option><option value="03-08">March 8th</option><option value="03-09">March 9th</option><option value="03-10">March 10th</option><option value="03-11">March 11th</option><option value="03-12">March 12th</option><option value="03-13">March 13th</option><option value="03-14">March 14th</option><option value="03-15">March 15th</option><option value="03-16">March 16th</option><option value="03-17">March 17th</option><option value="03-18">March 18th</option><option value="03-19">March 19th</option><option value="03-20">March 20th</option><option value="03-21">March 21st</option><option value="03-22">March 22nd</option><option value="03-23">March 23rd</option><option value="03-24">March 24th</option><option value="03-25">March 25th</option><option value="03-26">March 26th</option><option value="03-27">March 27th</option><option value="03-28">March 28th</option><option value="03-29">March 29th</option><option value="03-30">March 30th</option><option value="03-31">March 31st</option><option value="04-01">April 1st</option><option value="04-02">April 2nd</option><option value="04-03">April 3rd</option><option value="04-04">April 4th</option><option value="04-05">April 5th</option><option value="04-06">April 6th</option><option value="04-07">April 7th</option><option value="04-08">April 8th</option><option value="04-09">April 9th</option><option value="04-10">April 10th</option><option value="04-11">April 11th</option><option value="04-12">April 12th</option><option value="04-13">April 13th</option><option value="04-14">April 14th</option><option value="04-15">April 15th</option><option value="04-16">April 16th</option><option value="04-17">April 17th</option><option value="04-18">April 18th</option><option value="04-19">April 19th</option><option value="04-20">April 20th</option><option value="04-21">April 21st</option><option value="04-22">April 22nd</option><option value="04-23">April 23rd</option><option value="04-24">April 24th</option><option value="04-25">April 25th</option><option value="04-26">April 26th</option><option value="04-27">April 27th</option><option value="04-28">April 28th</option><option value="04-29">April 29th</option><option value="04-30">April 30th</option><option value="05-01">May 1st</option><option value="05-02">May 2nd</option><option value="05-03">May 3rd</option><option value="05-04">May 4th</option><option value="05-05">May 5th</option><option value="05-06">May 6th</option><option value="05-07">May 7th</option><option value="05-08">May 8th</option><option value="05-09">May 9th</option><option value="05-10">May 10th</option><option value="05-11">May 11th</option><option value="05-12">May 12th</option><option value="05-13">May 13th</option><option value="05-14">May 14th</option><option value="05-15">May 15th</option><option value="05-16">May 16th</option><option value="05-17">May 17th</option><option value="05-18">May 18th</option><option value="05-19">May 19th</option><option value="05-20">May 20th</option><option value="05-21">May 21st</option><option value="05-22">May 22nd</option><option value="05-23">May 23rd</option><option value="05-24">May 24th</option><option value="05-25">May 25th</option><option value="05-26">May 26th</option><option value="05-27">May 27th</option><option value="05-28">May 28th</option><option value="05-29">May 29th</option><option value="05-30">May 30th</option><option value="05-31">May 31st</option><option value="06-01">June 1st</option><option value="06-02">June 2nd</option><option value="06-03">June 3rd</option><option value="06-04">June 4th</option><option value="06-05">June 5th</option><option value="06-06">June 6th</option><option value="06-07">June 7th</option><option value="06-08">June 8th</option><option value="06-09">June 9th</option><option value="06-10">June 10th</option><option value="06-11">June 11th</option><option value="06-12">June 12th</option><option value="06-13">June 13th</option><option value="06-14">June 14th</option><option value="06-15">June 15th</option><option value="06-16">June 16th</option><option value="06-17">June 17th</option><option value="06-18">June 18th</option><option value="06-19">June 19th</option><option value="06-20">June 20th</option><option value="06-21">June 21st</option><option value="06-22">June 22nd</option><option value="06-23">June 23rd</option><option value="06-24">June 24th</option><option value="06-25">June 25th</option><option value="06-26">June 26th</option><option value="06-27">June 27th</option><option value="06-28">June 28th</option><option value="06-29">June 29th</option><option value="06-30">June 30th</option><option value="07-01">July 1st</option><option value="07-02">July 2nd</option><option value="07-03">July 3rd</option><option value="07-04">July 4th</option><option value="07-05">July 5th</option><option value="07-06">July 6th</option><option value="07-07">July 7th</option><option value="07-08">July 8th</option><option value="07-09">July 9th</option><option value="07-10">July 10th</option><option value="07-11">July 11th</option><option value="07-12">July 12th</option><option value="07-13">July 13th</option><option value="07-14">July 14th</option><option value="07-15">July 15th</option><option value="07-16">July 16th</option><option value="07-17">July 17th</option><option value="07-18">July 18th</option><option value="07-19">July 19th</option><option value="07-20">July 20th</option><option value="07-21">July 21st</option><option value="07-22">July 22nd</option><option value="07-23">July 23rd</option><option value="07-24">July 24th</option><option value="07-25">July 25th</option><option value="07-26">July 26th</option><option value="07-27">July 27th</option><option value="07-28">July 28th</option><option value="07-29">July 29th</option><option value="07-30">July 30th</option><option value="07-31">July 31st</option><option value="08-01">August 1st</option><option value="08-02">August 2nd</option><option value="08-03">August 3rd</option><option value="08-04">August 4th</option><option value="08-05">August 5th</option><option value="08-06">August 6th</option><option value="08-07">August 7th</option><option value="08-08">August 8th</option><option value="08-09">August 9th</option><option value="08-10">August 10th</option><option value="08-11">August 11th</option><option value="08-12">August 12th</option><option value="08-13">August 13th</option><option value="08-14">August 14th</option><option value="08-15">August 15th</option><option value="08-16">August 16th</option><option value="08-17">August 17th</option><option value="08-18">August 18th</option><option value="08-19">August 19th</option><option value="08-20">August 20th</option><option value="08-21">August 21st</option><option value="08-22">August 22nd</option><option value="08-23">August 23rd</option><option value="08-24">August 24th</option><option value="08-25">August 25th</option><option value="08-26">August 26th</option><option value="08-27">August 27th</option><option value="08-28">August 28th</option><option value="08-29">August 29th</option><option value="08-30">August 30th</option><option value="08-31">August 31st</option><option value="09-01">September 1st</option><option value="09-02">September 2nd</option><option value="09-03">September 3rd</option><option value="09-04">September 4th</option><option value="09-05">September 5th</option><option value="09-06">September 6th</option><option value="09-07">September 7th</option><option value="09-08">September 8th</option><option value="09-09">September 9th</option><option value="09-10">September 10th</option><option value="09-11">September 11th</option><option value="09-12">September 12th</option><option value="09-13">September 13th</option><option value="09-14">September 14th</option><option value="09-15">September 15th</option><option value="09-16">September 16th</option><option value="09-17">September 17th</option><option value="09-18">September 18th</option><option value="09-19">September 19th</option><option value="09-20">September 20th</option><option value="09-21">September 21st</option><option value="09-22">September 22nd</option><option value="09-23">September 23rd</option><option value="09-24">September 24th</option><option value="09-25">September 25th</option><option value="09-26">September 26th</option><option value="09-27">September 27th</option><option value="09-28">September 28th</option><option value="09-29">September 29th</option><option value="09-30">September 30th</option><option value="10-01">October 1st</option><option value="10-02">October 2nd</option><option value="10-03">October 3rd</option><option value="10-04">October 4th</option><option value="10-05">October 5th</option><option value="10-06">October 6th</option><option value="10-07">October 7th</option><option value="10-08">October 8th</option><option value="10-09">October 9th</option><option value="10-10">October 10th</option><option value="10-11">October 11th</option><option value="10-12">October 12th</option><option value="10-13">October 13th</option><option value="10-14">October 14th</option><option value="10-15">October 15th</option><option value="10-16">October 16th</option><option value="10-17">October 17th</option><option value="10-18">October 18th</option><option value="10-19">October 19th</option><option value="10-20">October 20th</option><option value="10-21">October 21st</option><option value="10-22">October 22nd</option><option value="10-23">October 23rd</option><option value="10-24">October 24th</option><option value="10-25">October 25th</option><option value="10-26">October 26th</option><option value="10-27">October 27th</option><option value="10-28">October 28th</option><option value="10-29">October 29th</option><option value="10-30">October 30th</option><option value="10-31">October 31st</option><option value="11-01">November 1st</option><option value="11-02">November 2nd</option><option value="11-03">November 3rd</option><option value="11-04">November 4th</option><option value="11-05">November 5th</option><option value="11-06">November 6th</option><option value="11-07">November 7th</option><option value="11-08">November 8th</option><option value="11-09">November 9th</option><option value="11-10">November 10th</option><option value="11-11">November 11th</option><option value="11-12">November 12th</option><option value="11-13">November 13th</option><option value="11-14">November 14th</option><option value="11-15">November 15th</option><option value="11-16">November 16th</option><option value="11-17">November 17th</option><option value="11-18">November 18th</option><option value="11-19">November 19th</option><option value="11-20">November 20th</option><option value="11-21">November 21st</option><option value="11-22">November 22nd</option><option value="11-23">November 23rd</option><option value="11-24">November 24th</option><option value="11-25">November 25th</option><option value="11-26">November 26th</option><option value="11-27">November 27th</option><option value="11-28">November 28th</option><option value="11-29">November 29th</option><option value="11-30">November 30th</option><option value="12-01">December 1st</option><option value="12-02">December 2nd</option><option value="12-03">December 3rd</option><option value="12-04">December 4th</option><option value="12-05">December 5th</option><option value="12-06">December 6th</option><option value="12-07">December 7th</option><option value="12-08">December 8th</option><option value="12-09">December 9th</option><option value="12-10">December 10th</option><option value="12-11">December 11th</option><option value="12-12">December 12th</option><option value="12-13">December 13th</option><option value="12-14">December 14th</option><option value="12-15">December 15th</option><option value="12-16">December 16th</option><option value="12-17">December 17th</option><option value="12-18">December 18th</option><option value="12-19">December 19th</option><option value="12-20">December 20th</option><option value="12-21">December 21st</option><option value="12-22">December 22nd</option><option value="12-23">December 23rd</option><option value="12-24">December 24th</option><option value="12-25">December 25th</option><option value="12-26">December 26th</option><option value="12-27">December 27th</option><option value="12-28">December 28th</option><option value="12-29">December 29th</option><option value="12-30">December 30th</option><option value="12-31">December 31st</option></select>').show();
            }

            $RecurrenceEndArea.show();
            BigTreeCustomControls();

            if (existing_val) {
                // Update the dropdown
                $RecurrenceDetailArea.find("select").val(existing_val);
                var el = $RecurrenceDetailArea.find("select").get(0);
                el.customControl.Container.find("span").html('<figure class="handle"></figure>' + el.options[el.selectedIndex].text);
            }
        }
    }
});