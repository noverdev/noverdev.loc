<?php

namespace App\Entity\UserEntities;


use ApiPlatform\Core\Annotation\ApiResource;
use App\Entity\TaskEntities\Task;
use App\Entity\UserTaskHistories;
use App\Repository\UserRepositories\UserRepository;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $deletedAt;

    /**
     * @ORM\OneToOne(targetEntity=UserDetails::class, mappedBy="user", cascade={"persist", "remove"})
     */
    private $userDetails;

    /**
     * @ORM\OneToMany(targetEntity=Task::class, mappedBy="initiator", orphanRemoval=true)
     */
    private $tasks;

    /**
     * @ORM\ManyToMany(targetEntity=UserTaskHistories::class, mappedBy="executor")
     */
    private $userTaskHistories;

    public function __construct()
    {
        $this->tasks = new ArrayCollection();
        $this->userTaskHistories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getUserDetails(): ?UserDetails
    {
        return $this->userDetails;
    }

    public function setUserDetails(UserDetails $userDetails): self
    {
        // set the owning side of the relation if necessary
        if ($userDetails->getUser() !== $this) {
            $userDetails->setUser($this);
        }

        $this->userDetails = $userDetails;

        return $this;
    }

    /**
     * @return Collection|Task[]
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): self
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks[] = $task;
            $task->setInitiator($this);
        }

        return $this;
    }

    public function removeTask(Task $task): self
    {
        if ($this->tasks->removeElement($task)) {
            // set the owning side to null (unless already changed)
            if ($task->getInitiator() === $this) {
                $task->setInitiator(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|UserTaskHistories[]
     */
    public function getUserTaskHistories(): Collection
    {
        return $this->userTaskHistories;
    }

    public function addUserTaskHistory(UserTaskHistories $userTaskHistory): self
    {
        if (!$this->userTaskHistories->contains($userTaskHistory)) {
            $this->userTaskHistories[] = $userTaskHistory;
            $userTaskHistory->addExecutor($this);
        }

        return $this;
    }

    public function removeUserTaskHistory(UserTaskHistories $userTaskHistory): self
    {
        if ($this->userTaskHistories->removeElement($userTaskHistory)) {
            $userTaskHistory->removeExecutor($this);
        }

        return $this;
    }

    public function getCreatedAt(): ?DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getDeletedAt(): ?DateTimeInterface
    {
        return $this->deletedAt;
    }

    public function setDeletedAt(?DateTimeInterface $deletedAt): self
    {
        $this->deletedAt = $deletedAt;

        return $this;
    }
}
