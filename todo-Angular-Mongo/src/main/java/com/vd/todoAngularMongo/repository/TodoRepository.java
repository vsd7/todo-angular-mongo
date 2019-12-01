/**
 * 
 */
package com.vd.todoAngularMongo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vd.todoAngularMongo.model.Todo;

/**
 * @author Vivek Deshmukh
 *
 */
public interface TodoRepository extends MongoRepository<Todo, String>{
	

}
