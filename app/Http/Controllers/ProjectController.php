<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function getAllProjects(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = Project::withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        $data->map(function ($item) {
            if ($item->banner) {
                $item->banner = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->banner))
                );
            } else {
                $item->banner = null;
            }

            if ($item->last_image) {
                $item->last_image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->last_image))
                );
            } else {
                $item->last_image = null;
            }
            if ($item->slider_image) {
                $item->slider_image = url(
                        sprintf('storage/%s', str_replace('\\', '/', $item->slider_image))
                    );
            } else {
                    $item->slider_image = null;
            }
            if ($item->small_image) {
                $item->small_image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->small_image))
                );
            } else {
                $item->small_image = null;
            }

            return $item;
        });

        return response()->json($data);
    }
    public function getProjects($slug, Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $projects = Project::withTranslations($languageCode)->where('slug', $slug)->first();
        $projects = $projects->translate($languageCode);
        if ($projects->banner) {
            $projects->banner = url(
                sprintf('storage/%s', str_replace('\\', '/', $projects->banner))
            );
        } else {
            $projects->banner = null;
        }

        if ($projects->last_image) {
            $projects->last_image = url(
                sprintf('storage/%s', str_replace('\\', '/', $projects->last_image))
            );
        } else {
            $projects->last_image = null;
        }

        if ($projects->small_image) {
            $projects->small_image = url(
                sprintf('storage/%s', str_replace('\\', '/', $projects->small_image))
            );
        } else {
            $projects->small_image = null;
        }
        if ($projects->text_images) {
            $textImages = json_decode($projects->text_images);

            // Map each text image path to its URL
            $textImages = array_map(function ($path) {
                return url(sprintf('storage/%s', str_replace('\\', '/', $path)));
            }, $textImages);

            $projects->text_images = $textImages;
        } else {
            $projects->text_images = null;
        }
        $images = json_decode($projects->images);
        $images = array_map(function ($path) {
            return url(sprintf('storage/%s', str_replace('\\', '/', $path)));
        }, $images);
        $projects->images = $images;
        return response()->json($projects);
    }
}