<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpertResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'country' => $this->country,
            'expert' => $this->expert,
            'name' => $this->name,
            'timezone' => $this->timezone,
            'working_hours_from' => $this->working_hours_from,
            'working_hours_to' => $this->working_hours_to,
            'books' => BookResource::collection($this->books),
            'approved_books' => ApprovedBookResource::collection($this->approvedBooks)

        ];
    }
}
