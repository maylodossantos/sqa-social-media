package com.demoapp.demo.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Map;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.demoapp.demo.repository.UserPostReactionRepository;

public class PostServiceTest {

    private UserPostReactionRepository repository;
    private PostService service;

    @BeforeEach
    void setup() {
        repository = Mockito.mock(UserPostReactionRepository.class);
        service = new PostService(repository);
    }

    @Test
    void deveCurtirPost() {

        when(repository.findByUserIdAndPostId(1L, 10L))
                .thenReturn(Optional.empty());

        Map<String, Object> resultado =
                service.toggleLike(10L, 1L);

        assertEquals(true, resultado.get("liked"));
    }
}