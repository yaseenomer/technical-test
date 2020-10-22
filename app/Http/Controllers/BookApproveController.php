<?php

namespace App\Http\Controllers;

use App\BookApprove;
use App\Http\Requests\BookAppointmentRequest;
use Illuminate\Http\Request;

class BookApproveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(BookAppointmentRequest $request)
    {
        $bookApprove = new BookApprove;
        $bookApprove->date = $request->date;
        $bookApprove->user_id = auth()->id();
        $bookApprove->expert_id = $request->expert_id;
        $bookApprove->book_id = $request->book_id;
        $bookApprove->save();
        return  $bookApprove;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BookApprove  $bookApprove
     * @return \Illuminate\Http\Response
     */
    public function show(BookApprove $bookApprove)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BookApprove  $bookApprove
     * @return \Illuminate\Http\Response
     */
    public function edit(BookApprove $bookApprove)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BookApprove  $bookApprove
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BookApprove $bookApprove)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BookApprove  $bookApprove
     * @return \Illuminate\Http\Response
     */
    public function destroy(BookApprove $bookApprove)
    {
        //
    }
}
