package com.retroswap.RetroSwap_Backend.Model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductSearchRequest {
    private String keyword;
    private Byte category;
    private String color;
    private Double maxPrice;
    private Double minPrice;
}
