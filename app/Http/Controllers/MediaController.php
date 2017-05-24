<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Media;

class MediaController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $media = Media::findOrFail($id);
        
        if($media->delete()){

            $message = [
                'type' => 'success',
                'message' => 'Media deleted'
            ];
            return response()->json($message);

        }
    }


    public function handleFileUpload(Request $request)
    {
        if ($request->hasFile('files') || $request->hasFile('header-image')) {
            
            $response = [];
            
            $files = $request->hasFile('header-image') ? $request->file('header-image') : $request->file('files');

            foreach($files as $file){
                
                $mimeType = $file->getMimeType();
                $filename = $file->getClientOriginalName();
                $ext = pathinfo($filename, PATHINFO_EXTENSION);
                $new_str = preg_replace('/'. preg_quote($ext, '/') . '$/', '', $filename);
                $filename = str_slug($new_str) . '.' . $ext;

                $upload_success = $file->move('uploads', $filename);

                if($upload_success){

                    $media = Media::firstOrCreate([
                        'mime_type' => $mimeType,
                        'type' => strtok($mimeType, '/'),
                        'url' => $filename
                        ]);

                    $response[] = [
                        'url' => $filename,
                        'path' => 'uploads',
                        'id' => $media->id
                    ];


                }
            }
            
            return response()->json(['files' => $response]);
        }
    }
}
