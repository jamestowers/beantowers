<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];
    protected $dates = ['deleted_at'];

    public function media()
    {
        return $this->belongsToMany('App\Media')
            ->withPivot('is_header');
    }

    public function images()
    {
        return $this->media()->images()
            ->wherePivot('is_header', '=', false)
            ->orderBy('media_project.order');
    }

    public function headerImage()
    {
        return $this->media()->images()
            ->wherePivot('is_header', '=', true);
    }
}
