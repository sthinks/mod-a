<?php

namespace App\Http\Controllers;

use App\Models\Slider;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function getSliders()
    {
        $slider = Slider::all();
        $slider->map(function ($item) {
            if ($item->image) {
                $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
                );
            } else {
                $result = null;
                $item->image = $result;
                return $item->image;
            }
        });
        return response()->json($slider);
    }
}