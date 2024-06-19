<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Carbon\CarbonPeriod;
use Carbon\Carbon;

class DateController extends Controller
{
    public function calculate(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $period = CarbonPeriod::create($startDate, $endDate);
        $weekends = [];

        foreach ($period as $date) {
            if ($date->isSaturday() || $date->isSunday()) {
                $weekends[] = $date->locale('id')->isoFormat('dddd, DD MMMM YYYY');
            }
        }

        return view('result', ['weekends' => $weekends]);
    }
}
