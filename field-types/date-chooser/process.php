<?
	// Start date / end date
	if ($bigtree["post_data"]["start_date"]) {
		$bigtree["entry"]["start_date"] = date("Y-m-d",strtotime($bigtree["post_data"]["start_date"]));
	} else {
		$bigtree["entry"]["start_date"] = "";
	}
	if ($bigtree["post_data"]["end_date"]) {
		// If the end date is actually earlier than the start date, get rid of it.
		if (strtotime($bigtree["post_data"]["end_date"]) < strtotime($bigtree["post_data"]["start_date"])) {
			$bigtree["entry"]["end_date"] = "";
		} else {
			$bigtree["entry"]["end_date"] = date("Y-m-d",strtotime($bigtree["post_data"]["end_date"]));
		}
	} else {
		$bigtree["entry"]["end_date"] = "";
	}
	// Start time / end time / all day
	if ($bigtree["post_data"]["all_day"] || !$bigtree["post_data"]["start_time"]) {
		$bigtree["entry"]["start_time"] = "";
		$bigtree["entry"]["end_time"] = "";
		$bigtree["entry"]["all_day"] = "on";
	} else {
		$bigtree["entry"]["all_day"] = "";
		$bigtree["entry"]["start_time"] = date("H:i:s",strtotime($bigtree["post_data"]["start_time"]));
		if ($bigtree["post_data"]["end_time"]) {
			// If the end time is before the start time and the event doesn't span multiple days, kill the end time.
			if (strtotime($bigtree["post_data"]["end_time"]) < strtotime($bigtree["post_data"]["start_time"]) && !$bigtree["entry"]["end_date"]) {
				$bigtree["entry"]["end_time"] = "";
			} else {
				$bigtree["entry"]["end_time"] = date("H:i:s",strtotime($bigtree["post_data"]["end_time"]));
			}
		} else {
			$bigtree["entry"]["end_time"] = "";
		}
	}
	
	if ($bigtree["post_data"]["recurrence_type"]) {
		$bigtree["entry"]["recurrence_type"] = $bigtree["post_data"]["recurrence_type"];
		$bigtree["entry"]["recurrence_detail"] = $bigtree["post_data"]["recurrence_detail"];
		if (strtotime($bigtree["post_data"]["recurring_end_date"]) > strtotime($bigtree["post_data"]["start_date"])) {
			$bigtree["entry"]["recurring_end_date"] = $bigtree["post_data"]["recurring_end_date"];
		} else {
			$bigtree["entry"]["recurring_end_date"] = "";
		}
	} else {
		$bigtree["entry"]["recurrence_type"] = "";
		$bigtree["entry"]["recurrence_detail"] = "";
		$bigtree["entry"]["recurring_end_date"] = "";
		$bigtree["entry"]["canceled_recurrences"] = "";
	}
	
	$field["ignore"] = true;

	BigTreeAutoModule::clearCache("btx_events_date_cache");
?>