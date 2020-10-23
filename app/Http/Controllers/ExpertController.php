<?php

namespace App\Http\Controllers;

use App\Expert;
use App\Http\Resources\ExpertResource;
use Illuminate\Http\Request;

class ExpertController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ExpertResource::collection(Expert::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\expert  $expert
     * @return \Illuminate\Http\Response
     */
    public function show(expert $expert)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\expert  $expert
     * @return \Illuminate\Http\Response
     */
    public function edit(expert $expert)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\expert  $expert
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, expert $expert)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\expert  $expert
     * @return \Illuminate\Http\Response
     */
    public function destroy(expert $expert)
    {
        //
    }
}
