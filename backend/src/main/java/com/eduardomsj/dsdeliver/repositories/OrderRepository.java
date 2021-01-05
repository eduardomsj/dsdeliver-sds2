package com.eduardomsj.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduardomsj.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
