<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use App\Models\News;

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
     public function getAllNews(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = News::withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        $data->map(function ($item) {
            if ($item->image) {
                $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
                );
            } else {
                $item->image = null;
            }

            if ($item->last_image) {
                $item->last_image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->last_image))
                );
            } else {
                $item->last_image = null;
            }

            if ($item->image_gallery) {
            $textImages = json_decode($item->image_gallery);

            // Map each text image path to its URL
            $textImages = array_map(function ($path) {
                return url(sprintf('storage/%s', str_replace('\\', '/', $path)));
            }, $textImages);

            $item->image_gallery = $textImages;
            } else {
                $item->image_gallery = null;
            }
                
            return $item;
        });

        return response()->json($data);
    }
     public function getNew($slug, Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $projects = News::withTranslations($languageCode)->where('slug', $slug)->first();
        $projects = $projects->translate($languageCode);
        if ($projects->image) {
            $projects->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $projects->image))
            );
        } else {
            $projects->image = null;
        }

        if ($projects->last_image) {
            $projects->last_image = url(
                sprintf('storage/%s', str_replace('\\', '/', $projects->last_image))
            );
        } else {
            $projects->last_image = null;
        }

       
        if ($projects->image_gallery) {
            $textImages = json_decode($projects->image_gallery);

            // Map each text image path to its URL
            $textImages = array_map(function ($path) {
                return url(sprintf('storage/%s', str_replace('\\', '/', $path)));
            }, $textImages);

            $projects->image_gallery = $textImages;
        } else {
            $projects->image_gallery = null;
        }
        
        return response()->json($projects);
    }

}