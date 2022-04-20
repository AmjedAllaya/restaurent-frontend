package com.nilesh.springCRUD.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

@Entity
public class Category {
	//private static final long serialVersionUID = 6711457437559348053L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String description;

	@OneToMany(mappedBy = "categorie")
	private List<Produit> prods;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	/*public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Category(String nom) {
		super();
		this.nom = nom;
	}

	public Category(String nom, String description) {
		this.nom = nom;
		this.description = description;
	}

	public Category(Long id, String nom, String description) {
		this.id = id;
		this.nom = nom;
		this.description = description;
	}

	 */
}
