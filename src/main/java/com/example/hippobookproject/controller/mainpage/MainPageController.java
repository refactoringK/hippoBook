package com.example.hippobookproject.controller.mainpage;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
public class MainPageController {

    @RequestMapping("/search")
    public String searchPage(){
        return "/main/searchpage";
    }

}
