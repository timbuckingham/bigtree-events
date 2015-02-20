<?
	$bigtree["datepickers"][] = "field_start_date";
	$bigtree["datepickers"][] = "field_end_date";
	$bigtree["datepickers"][] = "field_recurring_end_date";
	$bigtree["timepickers"][] = "field_start_time";
	$bigtree["timepickers"][] = "field_end_time";
	if (!in_array("events.js",$bigtree["js"])) {
		$bigtree["js"][] = "events.js";
	}
?>
<div class="sub_section" style="margin-bottom: -30px; margin-top: 30px;">
	<div style="float: left; margin: 0 15px 0 0;">
		<fieldset>
			<label for="field_start_date">Start Date</label>
			<input type="text" class="date_picker" id="field_start_date" autocomplete="off" value="<? if ($bigtree["entry"]["start_date"]) { echo date("m/d/Y",strtotime($bigtree["entry"]["start_date"])); } ?>" name="start_date" tabindex="7" />
			<span class="icon_small icon_small_calendar date_picker_icon"></span>
		</fieldset>
		<fieldset>
			<label for="field_start_time">Start Time</label>
			<input type="text" class="time_picker" id="field_start_time" autocomplete="off" value="<? if ($bigtree["entry"]["start_time"]) { echo date("g:ia",strtotime($bigtree["entry"]["start_time"])); } ?>" name="start_time" tabindex="9" <? if ($bigtree["entry"]["all_day"]) { ?>disabled="disabled" <? } ?>/>
			<span class="icon_small icon_small_clock time_picker_icon"></span>
		</fieldset>
	</div>
	<div style="float: left; margin: 0 15px 15px 0;">
		<fieldset>
			<label for="field_end_date">End Date</label>
			<input type="text" class="date_picker" id="field_end_date" autocomplete="off" value="<? if ($bigtree["entry"]["end_date"]) { echo date("m/d/Y",strtotime($bigtree["entry"]["end_date"])); } ?>" name="end_date" tabindex="8" />
			<span class="icon_small icon_small_calendar date_picker_icon"></span>
		</fieldset>
		<fieldset>
			<label for="field_end_time">End Time</label>
			<input type="text" class="time_picker" id="field_end_time" autocomplete="off" value="<? if ($bigtree["entry"]["end_time"]) { echo date("g:ia",strtotime($bigtree["entry"]["end_time"])); } ?>" name="end_time" tabindex="10" <? if ($bigtree["entry"]["all_day"]) { ?>disabled="disabled" <? } ?>/>
			<span class="icon_small icon_small_clock time_picker_icon"></span>
		</fieldset>
	</div>
	<br class="clear" />
	<fieldset>
		<input type="checkbox" id="field_all_day" tabindex="11" name="all_day" <? if ($bigtree["entry"]["all_day"]) { ?>checked="checked" <? } ?>/> <label class="for_checkbox" for="field_all_day">All Day</label>
	</fieldset>
	<fieldset style="float: left; margin: 0 15px 0 0;">
		<label for="field_recurrence_type">Reoccur</label>
		<select name="recurrence_type" id="field_recurrence_type" tabindex="12">
			<option value="">Never</option>
			<option value="daily"<? if ($bigtree["entry"]["recurrence_type"] == "daily") { ?> selected="selected"<? } ?>>Daily</option>
			<option value="weekly"<? if ($bigtree["entry"]["recurrence_type"] == "weekly") { ?> selected="selected"<? } ?>>Weekly</option>
			<option value="monthly"<? if ($bigtree["entry"]["recurrence_type"] == "monthly") { ?> selected="selected"<? } ?>>Monthly</option>
			<option value="yearly"<? if ($bigtree["entry"]["recurrence_type"] == "yearly") { ?> selected="selected"<? } ?>>Yearly</option>
		</select>
	</fieldset>
	<fieldset style="float: left; margin: 0 15px 0 0;<? if (!$bigtree["entry"]["recurrence_type"] || $bigtree["entry"]["recurrence_type"] == "daily") { ?> display: none;<? } ?>" id="recurrence_detail_area">
		<input type="hidden" name="recurrence_detail" value="<?=$bigtree["entry"]["recurrence_detail"]?>" />
	</fieldset>
	<fieldset style="float: left; margin: 0;<? if (!$bigtree["entry"]["recurrence_type"]) { ?> display: none;<? } ?>" id="recurrence_end_area">
		<label>Until</label>
		<input type="text" class="date_picker" id="field_recurring_end_date" autocomplete="off" value="<? if ($bigtree["entry"]["recurring_end_date"]) { echo date("m/d/Y",strtotime($bigtree["entry"]["recurring_end_date"])); } ?>" name="recurring_end_date" />
		<span class="icon_small icon_small_calendar date_picker_icon"></span>
	</fieldset>
	<br class="clear" />
</div>