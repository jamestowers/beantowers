<?php

namespace App\Http\Controllers;

use App\Project;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $projects = Project::with(['images', 'headerImage'])->get();

        if($request->wantsJson()) { 
            return response()->json($projects);
        }
        return view('admin/projects/index', compact('projects'));
    }

    /*public function list()
    {
        $projects = Project::all();

        if(Request::wantsJson()) { 
            return response()->json($projects);
        }
        return view('admin/projects/index', compact('projects'));
    }*/

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Project $project)
    {
        return view('admin/projects/createOrUpdate', compact('project'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|unique:projects|max:255',
            'description' => 'required',
        ]);

        $project = Project::create([
            'title' => $request->title,
            'slug' => $this->makeSlugFromTitle($request->title),
            'subtitle' => $request->subtitle,
            'description' => $request->description
            ]);

        $project->media()->sync($request->images);
        
        return view('admin/projects/createOrUpdate', compact('project'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::findOrFail($id);

        return view('project', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project = Project::findOrFail($id);

        return view('admin/projects/createOrUpdate', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'description' => 'required',
        ]);

        $project = Project::findOrFail($id);

        $project->title = $request->title;
        $project->slug = $request->slug ? $request->slug : $this->makeSlugFromTitle($request->title);
        $project->subtitle = $request->subtitle;
        $project->description = $request->description;

        $project->save();

        $project->media()->sync($request->images);

        $message = [
            'type' => 'success',
            'message' => 'Project updated'
        ];

        return view('admin/projects/createOrUpdate', compact('project'))
            ->withMessage($message);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    /**
     * Create a conversation slug.
     *
     * @param  string $title
     * @return string
     */
    private function makeSlugFromTitle($title)
    {
        $slug = str_slug($title);

        $count = Project::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();

        return $count ? "{$slug}-{$count}" : $slug;
    }
}
