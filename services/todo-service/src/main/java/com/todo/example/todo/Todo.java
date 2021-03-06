package com.todo.example.todo;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.io.Serializable;

@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@RedisHash("Todo")
class Todo implements Serializable {

    private static final long serialVersionUID = 5630345854047958835L;
    @Id
    @EqualsAndHashCode.Include
    private String id;
    @Indexed
    private final String userId;
    private final String title;
    private final String content;
    private final boolean completed;
    private final long created;
    private final long expiration;

    public Todo(String userId, String title, String content, boolean completed, long created, long expiration) {
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.completed = completed;
        this.created = created;
        this.expiration = expiration;
    }
}