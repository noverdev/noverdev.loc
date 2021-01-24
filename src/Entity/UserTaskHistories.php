<?php

namespace App\Entity;

use App\Entity\TaskEntities\Task;
use App\Entity\TaskEntities\TaskStatus;
use App\Entity\UserEntities\User;
use App\Repository\UserTaskHistoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserTaskHistoriesRepository::class)
 */
class UserTaskHistories
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Task::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $task;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="userTaskHistories")
     */
    private $executor;

    /**
     * @ORM\ManyToOne(targetEntity=TaskStatus::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $status;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $startedAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $finishedAt;

    public function __construct()
    {
        $this->executor = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTask(): ?Task
    {
        return $this->task;
    }

    public function setTask(?Task $task): self
    {
        $this->task = $task;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getExecutor(): Collection
    {
        return $this->executor;
    }

    public function addExecutor(User $executor): self
    {
        if (!$this->executor->contains($executor)) {
            $this->executor[] = $executor;
        }

        return $this;
    }

    public function removeExecutor(User $executor): self
    {
        $this->executor->removeElement($executor);

        return $this;
    }

    public function getStatus(): ?TaskStatus
    {
        return $this->status;
    }

    public function setStatus(?TaskStatus $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getStartedAt(): ?\DateTimeInterface
    {
        return $this->startedAt;
    }

    public function setStartedAt(?\DateTimeInterface $startedAt): self
    {
        $this->startedAt = $startedAt;

        return $this;
    }

    public function getFinishedAt(): ?\DateTimeInterface
    {
        return $this->finishedAt;
    }

    public function setFinishedAt(?\DateTimeInterface $finishedAt): self
    {
        $this->finishedAt = $finishedAt;

        return $this;
    }
}
