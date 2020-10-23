<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookApprove extends Model
{
    //

    public function book() {
        return $this->belongsTo(book::class);
    }
}
